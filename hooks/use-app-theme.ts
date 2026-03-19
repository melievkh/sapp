import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { ThemeColors } from "@/types/theme";

export const useAppTheme = (): ThemeColors => {
  const theme = useColorScheme() ?? "light";
  return Colors[theme];
}