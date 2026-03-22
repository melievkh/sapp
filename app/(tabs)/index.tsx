import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  View,
} from 'react-native';
import ErrorState from '@/components/error-state';
import { ThemedText } from '@/components/themed-text';
import UserStats from '@/components/user-stats';
import { useAppTheme } from '@/hooks/use-app-theme';
import { useGetMyPerformance } from '@/query/useGetRanking.query';
import { useGetMe } from '@/query/useGetUser.query';
import { createStyles } from '@/styles/home.style';

const HomeScreen = () => {
  const colors = useAppTheme();
  const styles = createStyles(colors);

  const { data: user, isLoading: isUserLoading, error: userError } = useGetMe();
  const {
    data: myRanking,
    isLoading,
    isRefetching,
    refetch,
    error,
  } = useGetMyPerformance();

  if (isUserLoading || isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error || userError) {
    return <ErrorState onRetry={refetch} />;
  }

  if (!user) return null;

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
      }
    >
      <View style={styles.headerWrapper}>
        <View>
          <ThemedText type="subtitle">{user.fullname}</ThemedText>
          <ThemedText>{user.student?.level ?? 'No level'}</ThemedText>
        </View>
      </View>

      <UserStats
        user={user}
        myRanking={myRanking}
        isRankingLoading={isRefetching}
      />
    </ScrollView>
  );
};

export default HomeScreen;
