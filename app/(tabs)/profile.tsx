
import ProfileHeader from '@/components/headers/profile.header';
import { ThemedText } from '@/components/themed-text';
import { useAppTheme } from '@/hooks/use-app-theme';
import { useGetMe } from '@/query/useGetMe.query';
import { createStyles } from '@/styles/profile.styles';
import { useRouter } from 'expo-router';
import React from 'react';
import { ActivityIndicator, RefreshControl, ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {
  const colors = useAppTheme();
  const styles = createStyles(colors);
  const router = useRouter();
  const { data: user, isLoading, error, isRefetching, refetch } = useGetMe();

  if (isLoading) return <ActivityIndicator />;
  if (error || !user) return <ThemedText style={styles.loading}>Failed to load user data</ThemedText>;

  const scores = user.student?.scores?.map(s => s.score).filter((v): v is number => v != null) || [];
  const totalScores = scores.length;

  const avgScore = totalScores > 0
    ? scores.reduce((sum, curr) => sum + curr, 0) / totalScores
    : 0;

  const stats = [
    { id: '1', title: '🪙 Coins', value: user.coins },
    { id: '2', title: '🟡 Level', value: user.student?.level || 'N/A' },
    {
      id: '3', title: '❌ Missed Classes', value: user.student?.scores?.length
        ? `${user.student.scores.filter(s => s.attendance !== 'PRESENT').length} / ${user.student.scores.length}`
        : '0',
    },
    { id: '4', title: '🌟 Average Score', value: `${avgScore}/50` },
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
            <View key={item.id} style={styles.statItem}>
              <ThemedText style={styles.statTitle}>{item.title}</ThemedText>
              <ThemedText style={styles.statValue}>{item.value}</ThemedText>
            </View>
          ))}
        </View>

        {/* Navigation List */}
        <View style={styles.navContainer}>
          <TouchableOpacity style={styles.navItem} onPress={() => handleNavPress('/courses')}>
            <ThemedText style={styles.navText}>My Courses</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => handleNavPress('/payments')}>
            <ThemedText style={styles.navText}>Payments</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => handleNavPress('/scores')}>
            <ThemedText style={styles.navText}>Scores</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => handleNavPress('/attendance')}>
            <ThemedText style={styles.navText}>Attendance</ThemedText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProfileScreen