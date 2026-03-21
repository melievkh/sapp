import { ThemeColors } from '@/types/theme';
import { StyleSheet } from 'react-native';

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.tint,
  },
  header: {
    paddingTop: 80,
    paddingBottom: 60,
    alignItems: "center",
  },
  card: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
    backgroundColor: colors.background,
  },
  welcome: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    borderRadius: 20,
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 15,
    height: 50,
    borderWidth: 1,
  },
  usernameInput: {
    flex: 1,
    fontSize: 14,
    color: colors.text
  },
  passwordContainer: {
    flexDirection: "row",
    borderRadius: 20,
    alignItems: "center",
    paddingHorizontal: 12,
    height: 50,
    marginBottom: 15,
    borderWidth: 1,
  },
  passwordInput: {
    flex: 1,
    fontSize: 14,
    color: colors.text
  },
  policy: {
    textAlign: "center",
    fontSize: 14,
    marginBottom: 20,
    color: colors.textSecondary,
  },
  showPassword: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  link: {
    textDecorationLine: "underline",
    fontWeight: "500",
    color: colors.textSecondary,
  },
  button: {
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: colors.tint,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },

  buttonDisabled: {
    opacity: 0.6,
  },
  forgot: {
    textAlign: "center",
    fontSize: 14,
    color: colors.textSecondary,
  },
  version: {
    textAlign: "center",
    paddingBottom: 25,
    fontSize: 14,
    color: "#7A7A7A",
  },
  errorBox: {
    backgroundColor: 'rgba(255, 59, 48, 0.1)',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  errorText: {
    color: colors.red1,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
  },
});
