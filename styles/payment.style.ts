import { StyleSheet } from 'react-native';
import { ThemeColors } from '@/types/theme';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: colors.background,
      paddingBottom: 60,
    },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    courseContainer: {
      marginBottom: 20,
      backgroundColor: colors.backgroundSecondary,
      padding: 16,
      borderRadius: 12,
      shadowColor: colors.shadow,
      shadowOpacity: 0.05,
      shadowOffset: { width: 0, height: 3 },
      shadowRadius: 6,
      elevation: 3,
    },
    courseName: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 4,
      color: colors.text,
    },
    coursePrice: {
      fontSize: 16,
      color: colors.textSoft,
      marginBottom: 10,
    },
    noMonths: { marginVertical: 8 },
    monthItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 12,
      borderRadius: 10,
      marginBottom: 8,
    },
    paid: { backgroundColor: colors.green2 },
    unpaid: { backgroundColor: colors.red2 },
    monthText: { fontSize: 16, color: colors.textSoft },
    paidText: { color: colors.green1, fontWeight: 'bold', fontSize: 14 },
    unpaidText: { color: colors.red1, fontWeight: 'bold', fontSize: 14 },
  });
