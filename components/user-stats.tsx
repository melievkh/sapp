import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { useAppTheme } from '@/hooks/use-app-theme';
import { createStyles } from '@/styles/user-stats.style';
import { User } from '@/types/api.type';
import { getRankDisplay } from '@/utils/ranking.utils';
import { IconSymbol } from './ui/icon-symbol';

type Props = {
  user: User;
  myRanking?: any;
  isRankingLoading?: boolean;
};

const UserStats = ({ user, myRanking, isRankingLoading }: Props) => {
  const colors = useAppTheme();
  const styles = createStyles(colors);

  const avgScore = myRanking?.avgScore ?? 0;
  const percent = Math.round((avgScore / 50) * 100);

  const stats = [
    {
      id: 'coins',
      title: 'Coins',
      value: user.coins ?? 0,
      icon: 'dollarsign.circle.fill',
    },
    {
      id: 'level',
      title: 'Level',
      value: user.student?.level,
      icon: 'graduationcap.fill' as any,
    },
    {
      id: 'ranking',
      title: 'Leaderboard',
      value: getRankDisplay(myRanking?.rank, isRankingLoading),
      icon: 'list.number',
    },
  ];

  return (
    <View style={styles.container}>
      {stats.map((stat) => (
        <View key={stat.id} style={styles.card}>
          <IconSymbol size={30} name={stat.icon} color={colors.tint} />

          <View style={styles.textContainer}>
            <ThemedText style={styles.value}>{stat.value}</ThemedText>
            <ThemedText style={styles.title}>{stat.title}</ThemedText>
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.fullCard}>
        <ThemedText style={styles.avgScoreTitle}>
          Total Average Score: {percent}%
        </ThemedText>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}
        >
          <View style={styles.avgValueCard}>
            <ThemedText style={[styles.title, { color: colors.white }]}>
              {'>'}90% - Pass with no exam
            </ThemedText>
          </View>

          <View style={styles.avgValueCard}>
            <ThemedText style={[styles.title, { color: colors.white }]}>
              {'<'}60% - Fail
            </ThemedText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UserStats;
