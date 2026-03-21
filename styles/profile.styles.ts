import { StyleSheet } from 'react-native';
import { ThemeColors } from '@/types/theme';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      paddingTop: 80,
    },
    profileContainer: {
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    role: {
      fontSize: 12,
      marginTop: 4,
    },
    loading: {
      flex: 1,
      textAlign: 'center',
      marginTop: 50,
    },
    header: {
      marginBottom: 20,
      alignItems: 'center',
    },
    statsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    statItem: {
      width: '48%',
      backgroundColor: colors.background,
      padding: 15,
      borderRadius: 10,
      marginBottom: 10,
      shadowColor: colors.shadow,
      shadowOpacity: 0.05,
      shadowRadius: 5,
      elevation: 2,
    },
    statTitle: {
      fontSize: 14,
    },
    statValue: {
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: 5,
    },
    navContainer: {
      marginTop: 10,
    },
    navItem: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 12,
      paddingHorizontal: 20,
      backgroundColor: colors.backgroundSecondary,
      marginBottom: 10,
      borderRadius: 40,
      shadowColor: colors.shadow,
      shadowOpacity: 0.05,
      shadowRadius: 5,
      elevation: 2,
    },
    navText: {
      fontSize: 14,
    },
  });
