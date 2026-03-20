
import ProfileHeader from '@/components/headers/profile.header';
import { ThemedText } from '@/components/themed-text';
import { useAppTheme } from '@/hooks/use-app-theme';
import { useGetMe } from '@/query/useGetMe.query';
import { useGetMyPerformance } from '@/query/useGetRanking.query';
import { createStyles } from '@/styles/profile.styles';
import { getRankDisplay } from '@/utils/ranking.utils';
import { useRouter } from 'expo-router';
import React from 'react';
import { ActivityIndicator, RefreshControl, ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {
  const colors = useAppTheme();
  const styles = createStyles(colors);
  const router = useRouter();
  const { data: user, isLoading, error, isRefetching, refetch } = useGetMe();
  const { data: myRanking, isLoading: isRankingLoading } = useGetMyPerformance()

  if (isLoading) return <ActivityIndicator />;
  if (error || !user) return <ThemedText style={styles.loading}>Failed to load user data</ThemedText>;

  const stats = [
    { id: '1', title: '🪙 Coins', value: user.coins },
    { id: '2', title: '🟡 Level', value: user.student?.level || 'N/A' },
    { id: '3', title: '🏆 My Rank', value: getRankDisplay(myRanking?.rank, isRankingLoading), },
    { id: '4', title: '🌟 Average Score', value: `${myRanking?.avgScore ? myRanking?.avgScore.toFixed(1) : '0'}/50` },
  ];

  const handleNavPress = (screen: any) => {
    router.push(screen);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.backgroundSecondary }}>
      <ScrollView style={styles.container} refreshControl={
        <RefreshControl
          refreshing={isRefetching}
          onRefresh={refetch}
        />
      }>
        {/* User Header */}
        <ProfileHeader user={user} />

        <View style={styles.statsContainer}>
          {stats.map(item => (
            <TouchableOpacity key={item.id} style={styles.statItem}>
              <ThemedText style={styles.statTitle}>{item.title}</ThemedText>
              <ThemedText style={styles.statValue}>{item.value}</ThemedText>
            </TouchableOpacity>
          ))}
        </View>

        {/* Navigation List */}
        <View style={styles.navContainer}>
          <TouchableOpacity style={styles.navItem} onPress={() => handleNavPress('/(tabs)/profile/payment')}>
            <ThemedText style={styles.navText}>Payments</ThemedText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProfileScreen