
import ServicesHeader from '@/components/headers/services.header';
import { ThemedText } from '@/components/themed-text';
import { useAppTheme } from '@/hooks/use-app-theme';
import { useGetUser } from '@/query/useGetUser.query';
import { createStyles } from '@/styles/services.styles';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const UserDashboardScreen = () => {
  const colors = useAppTheme();
  const styles = createStyles(colors);
  const router = useRouter();
  const { data: user, isLoading, error } = useGetUser();

  if (isLoading) return <ThemedText style={styles.loading}>Loading...</ThemedText>;
  if (error || !user) return <ThemedText style={styles.loading}>Failed to load user data</ThemedText>;

  const stats = [
    { id: '1', title: 'Coins', value: user.coins },
    { id: '2', title: 'Level', value: user.student?.level || 'N/A' },
    { id: '3', title: 'Attendance', value: user.student?.scores?.length ? `${user.student.scores.filter(s => s.attendance === 'PRESENT').length} / ${user.student.scores.length}` : '0' },
    { id: '4', title: 'Scores', value: user.student?.scores?.map(s => `${s.course.name}: ${s.score ?? '-'}`).join(', ') || '-' },
  ];

  const handleNavPress = (screen: any) => {
    router.push(screen);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.backgroundSecondary }}>
      <ScrollView style={styles.container}>
        {/* User Header */}
        <ServicesHeader user={user} />

        {/* Stats List */}
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

export default UserDashboardScreen