import { useThemeContext } from '@/context/theme.context';
import { useAppTheme } from '@/hooks/use-app-theme';
import { View, type ViewProps } from 'react-native';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export const ThemedView = ({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) => {
  const colors = useAppTheme();
  const { theme } = useThemeContext();

  const backgroundColor =
    theme === 'light'
      ? lightColor || colors.background
      : darkColor || colors.background;

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
};