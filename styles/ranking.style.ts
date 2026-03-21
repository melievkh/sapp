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
      backgroundColor: colors.background,
    },
    fixedToggleWrapper: {
      position: 'absolute',
      top: 16,
      left: 16,
      right: 16,
      zIndex: 10,
    },
    stickyToggle: {
      flexDirection: 'row',
      borderRadius: 25,
      marginHorizontal: 16,
      marginVertical: 8,
      overflow: 'hidden',
      padding: 4,
      backgroundColor: colors.backgroundSecondary,
    },
    fixedToggle: {
      flexDirection: 'row',
      borderRadius: 25,
      overflow: 'hidden',
      padding: 4,
    },
    listContent: {
      paddingBottom: 20,
      marginBottom: 20,
    },
  });
