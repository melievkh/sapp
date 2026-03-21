import { StyleSheet } from 'react-native';
import { ThemeColors } from '@/types/theme';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    card: {
      width: '48%',
      borderRadius: 30,
      padding: 16,
      marginVertical: 8,
      alignItems: 'center',
      backgroundColor: colors.background,
      flexDirection: 'row',
    },
    fullCard: {
      width: '100%',
      borderRadius: 30,
      padding: 16,
      marginVertical: 16,
      backgroundColor: colors.tint,
      shadowOpacity: 0.12,
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 10,
      shadowColor: colors.tint,
      elevation: 5,
    },
    avgScoreTitle: {
      color: colors.white,
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 18,
    },
    avgValueCard: {
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 12,
      marginRight: 12,
      backgroundColor: colors.tintSecondary,
      opacity: 0.9,
    },
    textContainer: {
      marginLeft: 10,
      justifyContent: 'center',
    },
    value: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    title: {
      fontSize: 12,
      marginTop: 2,
      fontWeight: '600',
      color: colors.textSecondary,
    },
  });
