import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, RefreshControl, ScrollView, TouchableOpacity, View } from 'react-native';

import ProfileHeader from '@/components/headers/profile.header';
import ThemeModal from '@/components/modal/theme/theme-modal';
import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useAppTheme } from '@/hooks/use-app-theme';
import { useGetMe } from '@/query/useGetMe.query';
import { useGetMyPerformance } from '@/query/useGetRanking.query';
import { createStyles } from '@/styles/profile.styles';
import { getRankDisplay } from '@/utils/ranking.utils';

const ProfileScreen = () => {
  const colors = useAppTheme();
  const styles = createStyles(colors);
  const router = useRouter();

  const [themeModalVisible, setThemeModalVisible] = useState<boolean>(false);

  const { data: user, isLoading, error, isRefetching, refetch } = useGetMe();
  const { data: myRanking, isLoading: isRankingLoading, refetch: refetchRanking } = useGetMyPerformance();

  if (isLoading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  if (error || !user)
    return (
      <ThemedText style={styles.loading}>
        Failed to load user data
      </ThemedText>
    );

  const stats = [
    { id: 'coins', title: '🪙 Coins', value: user.coins },
    { id: 'level', title: '🟡 Level', value: user.student?.level || 'N/A' },
    { id: 'ranking', title: '🏆 My level ranking', value: getRankDisplay(myRanking?.rank, isRankingLoading) },
    { id: 'avgScore', title: '🌟 Average Score', value: `${myRanking?.avgScore?.toFixed(1) || '0'}/50` },
  ];

  const handleNavPress = (screen: any) => router.push(screen);

  const handleRefresh = async () => {
    await Promise.all([refetch(), refetchRanking()]);
  };

  const renderStats = () => (
    <View style={styles.statsContainer}>
      {stats.map((item) => (
        <TouchableOpacity key={item.id} style={styles.statItem}>
          <ThemedText style={styles.statTitle}>{item.title}</ThemedText>
          <ThemedText style={styles.statValue}>{item.value}</ThemedText>
        </TouchableOpacity>
      ))}
    </View>
  );

  const navItems = [
    { title: 'Payments', screen: '/(tabs)/profile/payment' },
    { title: 'My Courses', screen: '/(tabs)/profile/courses' },
    { title: "Appearance", screen: "", onPress: () => setThemeModalVisible(true) },];

  const renderNav = () => (
    <View style={styles.navContainer}>
      {navItems.map((item) => (
        <TouchableOpacity
          key={item.title}
          style={styles.navItem}
          onPress={item.onPress || (() => handleNavPress(item.screen))}
        >
          <ThemedText style={styles.navText}>{item.title}</ThemedText>
          <IconSymbol size={16} name="chevron.right" color={colors.icon} />
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={isRefetching || isRankingLoading}
          onRefresh={handleRefresh}
        />
      }
    >
      <ProfileHeader user={user} />
      {renderStats()}
      {renderNav()}

      <ThemeModal visible={themeModalVisible} onClose={() => setThemeModalVisible(false)} />
    </ScrollView>

  );
};

export default ProfileScreen;