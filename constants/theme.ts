import { Platform } from 'react-native';
import { ThemeColors } from '@/types/theme';

const tintColorLight = '#ec7028';
const tintColorDark = '#ec7028';

export const Colors: {
  light: ThemeColors;
  dark: ThemeColors;
} = {
  light: {
    text: '#11181C',
    white: '#fff',
    black: '#000',
    textSecondary: '#5f5f5f',
    background: '#fff',
    backgroundSecondary: '#faf9fd',
    border: '#d7d7d7',
    tint: tintColorLight,
    red1: '#d63a49',
    red2: '#f8e8e8',
    icon: '#5f5f5f',
    green1: '#155724',
    green2: '#edfbe8',
    shadow: '#000000',
  },
  dark: {
    text: '#ECEDEE',
    white: '#fff',
    black: '#000',
    textSecondary: '#7A7A7A',
    background: '#111114',
    backgroundSecondary: '#000000',
    border: '#262626',
    tint: tintColorDark,
    red1: '#d63a49',
    red2: '#322424',
    icon: '#5f5f5f',
    green1: '#206b31',
    green2: '#293126',
    shadow: '#656464',
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
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
