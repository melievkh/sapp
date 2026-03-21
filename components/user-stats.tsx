import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { useAppTheme } from '@/hooks/use-app-theme';
import { createStyles } from '@/styles/profile.styles';
import { User } from '@/types/api.type';
import { getRankDisplay } from '@/utils/ranking.utils';

type Props = {
  user: User;
  myRanking?: any;
  isRankingLoading?: boolean;
};

const UserStats = ({ user, myRanking, isRankingLoading }: Props) => {
  const colors = useAppTheme();
  const styles = createStyles(colors);

  const stats = [
    { id: 'coins', title: '🪙 Coins', value: user.coins },
    { id: 'level', title: '🟡 Level', value: user.student?.level || 'N/A' },
    {
      id: 'ranking',
      title: '🏆 My level ranking',
      value: getRankDisplay(myRanking?.rank, isRankingLoading),
    },
    {
      id: 'avgScore',
      title: '🌟 Average Score',
      value: `${myRanking?.avgScore?.toFixed(1) || '0'}/50`,
    },
  ];

  return (
    <View style={styles.statsContainer}>
      {stats.map((item) => (
        <TouchableOpacity key={item.id} style={styles.statItem}>
          <ThemedText style={styles.statTitle}>{item.title}</ThemedText>
          <ThemedText style={styles.statValue}>{item.value}</ThemedText>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default UserStats;
