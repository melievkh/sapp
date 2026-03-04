import { ThemeColors } from "@/types/theme";
import { StyleSheet } from "react-native";

export const createStyles = (theme: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});