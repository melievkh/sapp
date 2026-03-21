import { ScrollView, View } from 'react-native';
import UserStats from '@/components/user-stats';
import { useAppTheme } from '@/hooks/use-app-theme';
import { useGetMe } from '@/query/useGetMe.query';
import { useGetMyPerformance } from '@/query/useGetRanking.query';
import { createStyles } from '@/styles/home.style';

const HomeScreen = () => {
  const colors = useAppTheme();
  const styles = createStyles(colors);

  const { data: user } = useGetMe();
  const { data: myRanking, isLoading } = useGetMyPerformance();

  if (!user) return null;

  return (
    <ScrollView style={styles.container}>
      <View></View>

      <UserStats
        user={user}
        myRanking={myRanking}
        isRankingLoading={isLoading}
      />
    </ScrollView>
  );
};

export default HomeScreen;
