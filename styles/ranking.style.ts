import { ThemeColors } from "@/types/theme";
import { StyleSheet } from "react-native";

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background
  },
  toggleWrapper: {
    marginBottom: 20,
  },
  toggle: {
    flexDirection: "row",
    borderRadius: 14,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.border,
  },
  listContent: {
    paddingBottom: 20,
  },
});