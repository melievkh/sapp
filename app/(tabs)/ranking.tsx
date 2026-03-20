import { BlurView } from "expo-blur";
import React, { useMemo, useState } from "react";
import { ActivityIndicator, FlatList, RefreshControl, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SegmentButton from "@/components/buttons/segment-button";
import RankingItem from "@/components/ranking-item";
import { useAppTheme } from "@/hooks/use-app-theme";
import { useGetMe } from "@/query/useGetMe.query";
import { useGetPerformanceRanking } from "@/query/useGetRanking.query";
import { createStyles } from "@/styles/ranking.style";

type RankingType = "myLevel" | "allLevels";

const RankingScreen = () => {
  const colors = useAppTheme();
  const styles = createStyles(colors);

  const [type, setType] = useState<RankingType>("myLevel");

  const { data: rankingData, refetch, isRefetching, isLoading } = useGetPerformanceRanking();
  const { data: currentUser } = useGetMe();

  const isMyLevel = type === "myLevel";

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!rankingData?.length) {
    return (
      <View style={styles.center}>
        <Text>No ranking yet</Text>
      </View>
    );
  }

  const displayedData = useMemo(() => {
    if (!currentUser) return rankingData;

    if (isMyLevel) {
      return rankingData.filter(item => item.level === currentUser.student?.level);
    }

    const top3 = rankingData.slice(0, 3);
    const rest = rankingData.slice(3);
    const selfIndex = rest.findIndex(item => item.studentId === currentUser.id);

    if (selfIndex === -1) return rankingData;

    const self = rest.splice(selfIndex, 1)[0];
    return [...top3, self, ...rest];
  }, [rankingData, currentUser, isMyLevel]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={displayedData}
        keyExtractor={item => item.studentId}
        contentContainerStyle={styles.listContent}
        refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
        ListHeaderComponent={
          <BlurView intensity={40} tint="light" style={styles.stickyToggle}>
            <SegmentButton
              colors={colors}
              title="My Level"
              isActive={isMyLevel}
              onPress={() => setType("myLevel")}
            />
            <SegmentButton
              colors={colors}
              title="All Levels"
              isActive={!isMyLevel}
              onPress={() => setType("allLevels")}
            />
          </BlurView>
        }
        stickyHeaderIndices={[0]}
        renderItem={({ item, index }) => (
          <RankingItem
            item={item}
            index={index}
            type={type}
            colors={colors}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default RankingScreen;