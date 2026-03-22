import React, { useMemo, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  View,
} from 'react-native';
import { BlurView } from 'expo-blur';
import SegmentButton from '@/components/buttons/segment-button';
import GiftCard from '@/components/gift-card';
import { ThemedText } from '@/components/themed-text';
import { useAppTheme } from '@/hooks/use-app-theme';
import { useGetMyGifts } from '@/query/useGetMyGifts.query';
import { createStyles } from '@/styles/gifts.style';

type GiftStatus = 'active' | 'used';

const GiftScreen = () => {
  const colors = useAppTheme();
  const styles = createStyles(colors);

  const { data: gifts, isLoading, isFetching, refetch } = useGetMyGifts();
  const [type, setType] = useState<GiftStatus>('active');

  console.log(isFetching);

  const isActiveTab = type === 'active';

  const filteredData = useMemo(() => {
    if (!gifts) return [];
    return gifts.filter((item) => (isActiveTab ? !item.used : item.used));
  }, [gifts, isActiveTab]);

  // Loading at initial fetch
  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // No gifts at all
  if (!gifts || gifts.length === 0) {
    return (
      <View style={styles.center}>
        <ThemedText>No gifts yet 🎁</ThemedText>
      </View>
    );
  }

  // No gifts in selected tab
  if (filteredData.length === 0) {
    return (
      <View style={styles.center}>
        <ThemedText>No {type} gifts 🎁</ThemedText>
      </View>
    );
  }

  return (
    <FlatList
      data={filteredData}
      keyExtractor={(item) => String(item.id)}
      refreshControl={
        <RefreshControl refreshing={isFetching} onRefresh={refetch} />
      }
      contentContainerStyle={styles.listContent}
      ListHeaderComponent={
        <View>
          {/* Sticky toggle with BlurView */}
          <View style={styles.shadowWrapper}>
            <BlurView intensity={40} style={styles.stickyToggle}>
              <SegmentButton
                colors={colors}
                title="Active"
                isActive={isActiveTab}
                onPress={() => setType('active')}
              />
              <SegmentButton
                colors={colors}
                title="Used"
                isActive={!isActiveTab}
                onPress={() => setType('used')}
              />
            </BlurView>
          </View>

          {/* Top activity indicator when refetching */}
          {isFetching && (
            <View style={{ paddingVertical: 8 }}>
              <ActivityIndicator size="large" color={colors.text} />
            </View>
          )}
        </View>
      }
      stickyHeaderIndices={[0]}
      renderItem={({ item }) => <GiftCard item={item} />}
    />
  );
};

export default GiftScreen;
