import { ThemeColors } from '@/types/theme';
import { StyleSheet } from 'react-native';

const createStyles = (colors: ThemeColors) => StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: colors.backgroundSecondary + 'AA', // Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 300,
    backgroundColor: colors.background,
    borderRadius: 20,
    elevation: 5,
    padding: 12,
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
    borderRadius: 30
  },
});

export default createStyles;