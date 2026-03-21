import { StyleSheet } from 'react-native';
import { ThemeColors } from '@/types/theme';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: colors.background,
    },
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    courseCard: {
      backgroundColor: colors.backgroundSecondary,
      padding: 18,
      borderRadius: 14,
      marginBottom: 16,
      shadowColor: colors.shadow,
      shadowOpacity: 0.08,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 2 },
      elevation: 3,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    courseName: {
      fontSize: 18,
      fontWeight: '700',
      color: colors.text,
      marginBottom: 6,
    },
    courseInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    courseLevel: {
      fontSize: 14,
      color: colors.textSoft,
      marginRight: 8,
    },
    coursePrice: {
      fontSize: 15,
      fontWeight: '600',
      color: colors.tint,
    },
    monthlyBadge: {
      backgroundColor: colors.tint + '20',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 8,
      fontSize: 12,
      fontWeight: '600',
      color: colors.tint,
      marginLeft: 6,
    },
  });
