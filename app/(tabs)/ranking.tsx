import React, { useMemo, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  View,
} from 'react-native';
import { BlurView } from 'expo-blur';
import SegmentButton from '@/components/buttons/segment-button';
import ErrorState from '@/components/error-state';
import RankingItem from '@/components/ranking-item';
import { ThemedText } from '@/components/themed-text';
import { useAppTheme } from '@/hooks/use-app-theme';
import { useGetMe } from '@/query/useGetMe.query';
import { useGetPerformanceRanking } from '@/query/useGetRanking.query';
import { createStyles } from '@/styles/ranking.style';

type RankingType = 'myLevel' | 'allLevels';

const RankingScreen = () => {
  const colors = useAppTheme();
  const styles = createStyles(colors);

  const [type, setType] = useState<RankingType>('myLevel');

  const {
    data: rankingData,
    refetch,
    isRefetching,
    isLoading,
    error,
  } = useGetPerformanceRanking();
  const { data: currentUser, isLoading: isUserLoading } = useGetMe();

  const isMyLevel = type === 'myLevel';

  const displayedData = useMemo(() => {
    if (!rankingData) return [];

    if (!currentUser) return rankingData;

    if (isMyLevel) {
      return rankingData.filter(
        (item) => item.level === currentUser.student?.level,
      );
    }

    const top3 = rankingData.slice(0, 3);
    const rest = rankingData.slice(3);
    const selfIndex = rest.findIndex((item) => item.userId === currentUser.id);

    if (selfIndex === -1) return rankingData;

    const self = rest[selfIndex];
    const newRest = rest.filter((_, i) => i !== selfIndex);

    return [...top3, self, ...newRest];
  }, [rankingData, currentUser, isMyLevel]);

  if (isLoading || isUserLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return <ErrorState onRetry={refetch} />;
  }

  if (!rankingData || rankingData.length === 0) {
    return (
      <View style={styles.center}>
        <ThemedText>No ranking yet</ThemedText>
      </View>
    );
  }
  return (
    <FlatList
      data={displayedData}
      keyExtractor={(item) => item.userId.toString()}
      contentContainerStyle={styles.listContent}
      refreshControl={
        <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
      }
      ListHeaderComponent={
        <View style={styles.shadowWrapper}>
          <BlurView intensity={40} style={styles.stickyToggle}>
            <SegmentButton
              colors={colors}
              title="My Level"
              isActive={isMyLevel}
              onPress={() => setType('myLevel')}
            />
            <SegmentButton
              colors={colors}
              title="All Levels"
              isActive={!isMyLevel}
              onPress={() => setType('allLevels')}
            />
          </BlurView>
        </View>
      }
      stickyHeaderIndices={[0]}
      renderItem={({ item, index }) => (
        <RankingItem item={item} index={index} type={type} colors={colors} />
      )}
    />
  );
};

export default RankingScreen;
