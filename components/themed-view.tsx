import { View, type ViewProps } from 'react-native';
import { useThemeContext } from '@/context/theme.context';
import { useAppTheme } from '@/hooks/use-app-theme';

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
      ? lightColor || colors.backgroundSecondary
      : darkColor || colors.backgroundSecondary;

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
};
