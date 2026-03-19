import { ThemeColors } from '@/types/theme';
import { Platform } from 'react-native';


const tintColorLight = '#ffb343';
const tintColorDark = '#ffb343';

export const Colors: {
  light: ThemeColors;
  dark: ThemeColors;
} = {
  light: {
    text: '#11181C',
    white: '#fff',
    black: '#000',
    textSecondary: '#7A7A7A',
    background: '#fff',
    backgroundSecondary: '#fbfbfb',
    border: '#dddddd',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    danger: '#rgb(255, 137, 137)'
  },
  dark: {
    text: '#ECEDEE',
    white: '#fff',
    black: '#000',
    textSecondary: '#7A7A7A',
    background: '#151718',
    backgroundSecondary: '#101010',
    border: '#333333',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    danger: '#rgb(255, 137, 137)'
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
