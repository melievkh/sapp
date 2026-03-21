import { StyleSheet } from 'react-native';
import { ThemeColors } from '@/types/theme';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      paddingTop: 80,
    },
    headerWrapper: {
      flex: 1,
      flexDirection: 'row',
    },
  });
