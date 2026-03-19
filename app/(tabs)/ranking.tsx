import SegmentButton from "@/components/buttons/segment-button";
import RankingItem from "@/components/ranking-item";
import { useAppTheme } from "@/hooks/use-app-theme";
import { useGetMe } from "@/query/useGetMe.query";
import {
  useGetCoinsRanking,
  useGetPerformanceRanking,
} from "@/query/useGetRanking.query";
import { createStyles } from "@/styles/ranking.style";
import { BlurView } from "expo-blur";
import React, { useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type RankingType = "performance" | "coins";

const RankingScreen = () => {
  const colors = useAppTheme();
  const styles = createStyles(colors);

  const [type, setType] = useState<RankingType>("performance");

  const performanceQuery = useGetPerformanceRanking();
  const coinsQuery = useGetCoinsRanking();
  const { data: currentUser } = useGetMe()

  const isPerformance = type === "performance";

  const data = isPerformance
    ? performanceQuery.data
    : coinsQuery.data;

  const isLoading = isPerformance
    ? performanceQuery.isLoading
    : coinsQuery.isLoading;


  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!data?.length) {
    return (
      <View style={styles.center}>
        <Text>No ranking yet</Text>
      </View>
    );
  }

  const displayedData = useMemo(() => {
    if (!currentUser) return data;
    const top3 = data.slice(0, 3);
    const rest = data.slice(3);
    const selfIndex = rest.findIndex((item: any) => item.id === currentUser.id);
    if (selfIndex === -1) return data;
    const self = rest.splice(selfIndex, 1)[0];

    return [...top3, self, ...rest];
  }, [data, currentUser]);

  return (
    <SafeAreaView style={styles.container}>
      {/* 🔁 Toggle */}
      <FlatList
        data={displayedData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <BlurView intensity={70} tint="light" style={styles.stickyToggle}>
            <SegmentButton
              colors={colors}
              title="Performance"
              isActive={isPerformance}
              onPress={() => setType("performance")}
            />
            <SegmentButton
              colors={colors}
              title="Coins"
              isActive={!isPerformance}
              onPress={() => setType("coins")}
            />
          </BlurView>
        }
        stickyHeaderIndices={[0]}
        renderItem={({ item, index }) => (
          <RankingItem
            item={item}
            index={index}
            type={type}
            bgColor={colors.background}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default RankingScreen
