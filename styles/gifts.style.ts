import { StyleSheet } from 'react-native';
import { ThemeColors } from '@/types/theme';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    listContent: {
      paddingBottom: 80,
      marginTop: 60,
      gap: 10,
    },

    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    shadowWrapper: {
      marginVertical: 8,
      borderRadius: 25,
      width: '80%',
      alignSelf: 'center',

      shadowColor: colors.shadow,
      shadowOpacity: 0.15,
      shadowOffset: { width: 0, height: 6 },
      shadowRadius: 12,
      elevation: 6,
    },

    stickyToggle: {
      flexDirection: 'row',
      borderRadius: 25,
      overflow: 'hidden',
      padding: 4,
    },

    // 🎁 Gift Card
    card: {
      flexDirection: 'row',
      backgroundColor: colors.background,
      marginHorizontal: 16,
      marginBottom: 14,
      padding: 16,
      borderRadius: 20,

      shadowColor: colors.shadow,
      shadowOpacity: 0.08,
      shadowOffset: { width: 0, height: 6 },
      shadowRadius: 12,
      elevation: 4,
    },

    iconWrapper: {
      borderRadius: 14,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.tint + '15',
      marginRight: 12,
      padding: 20,
    },

    content: {
      flex: 1,
      gap: 4,
      justifyContent: 'space-between',
    },

    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.text,
    },

    code: {
      fontSize: 16,
      fontWeight: '700',
      letterSpacing: 1,
    },

    rowBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    discount: {
      fontSize: 18,
      fontWeight: '800',
      color: colors.tint,
      marginTop: 2,
    },

    dateWrapper: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 6,
    },

    date: {
      fontSize: 12,
      color: colors.textSoft,
    },

    status: {
      fontSize: 12,
      fontWeight: '600',
      paddingHorizontal: 10,
      paddingVertical: 2,
      borderRadius: 10,
      alignSelf: 'flex-end',
    },

    active: {
      backgroundColor: colors.green1 + '20',
      color: colors.green1,
    },

    used: {
      backgroundColor: colors.red1 + '20',
      color: colors.red1,
    },
  });
