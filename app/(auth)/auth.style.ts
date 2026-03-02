import { ThemeColors } from '@/types/theme';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.tint,
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
    backgroundColor: theme.background,
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
  },
  policy: {
    textAlign: "center",
    fontSize: 14,
    marginBottom: 20,
    color: theme.textSecondary,
  },
  showPassword: {
    fontSize: 14,
    color: theme.textSecondary,
  },
  link: {
    textDecorationLine: "underline",
    fontWeight: "500",
    color: theme.textSecondary,
  },
  button: {
    height: 50,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: theme.tint,
  },
  forgot: {
    textAlign: "center",
    fontSize: 14,
    color: theme.textSecondary,
  },
  version: {
    textAlign: "center",
    paddingBottom: 25,
    fontSize: 14,
    color: "#7A7A7A",
  },
});
