import { StyleSheet } from 'react-native';
import { ThemeColors } from '@/types/theme';

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    modalBackground: {
      flex: 1,
      backgroundColor: colors.backgroundSecondary + 'AA',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      width: 300,
      backgroundColor: colors.background,
      borderRadius: 30,
      elevation: 5,
      padding: 18,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop: 20,
    },
    message: {
      fontSize: 16,
      marginBottom: 20,
      // textAlign: 'center',
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    cancelButton: {
      minWidth: 60,
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 30,
    },
    confirmButton: {
      minWidth: 60,
      backgroundColor: colors.tint,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingVertical: 10,
      borderRadius: 30,
    },
  });

export default createStyles;
