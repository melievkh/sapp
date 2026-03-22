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
      backgroundColor: colors.backgroundSecondary,
    },
    fixedToggleWrapper: {
      position: 'absolute',
      top: 16,
      left: 16,
      right: 16,
      zIndex: 10,
    },
    shadowWrapper: {
      marginHorizontal: 16,
      marginVertical: 8,
      borderRadius: 25,

      shadowColor: colors.shadow,
      shadowOpacity: 0.12,
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 10,

      elevation: 6,
    },
    stickyToggle: {
      flexDirection: 'row',
      borderRadius: 25,
      marginHorizontal: 16,
      marginVertical: 8,
      overflow: 'hidden',
      padding: 4,
      shadowOpacity: 0.12,
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 10,
      elevation: 5,
      backgroundColor: 'transparent',
    },
    fixedToggle: {
      flexDirection: 'row',
      borderRadius: 25,
      overflow: 'hidden',
      padding: 4,
    },
    listContent: {
      paddingBottom: 80,
      marginBottom: 20,
      marginTop: 60,
    },
  });
