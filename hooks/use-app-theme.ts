import { Colors } from "@/constants/theme";
import { useThemeContext } from "@/context/theme.context";

export const useAppTheme = () => {
  const { theme } = useThemeContext();
  return Colors[theme];
};