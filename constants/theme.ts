import { Platform } from 'react-native';
import { ThemeColors } from '@/types/theme';

const tintColor = '#f3551c';
const tintSecondaryColor = '#f96226';
const primary = '#4173e5';

export const Colors: {
  light: ThemeColors;
  dark: ThemeColors;
} = {
  light: {
    text: '#11181C',
    textSecondary: '#5f5f5f',
    white: '#fff',
    black: '#000',
    background: '#fff',
    backgroundSecondary: '#f6f6f6',
    border: '#d7d7d7',
    tint: tintColor,
    tintSecondary: tintSecondaryColor,
    red1: '#d63a49',
    red2: '#f8e8e8',
    icon: '#5f5f5f',
    green1: '#155724',
    green2: '#edfbe8',
    shadow: '#000000',
    primary: primary,
  },
  dark: {
    text: '#ECEDEE',
    textSecondary: '#8d8d8d',
    white: '#fff',
    black: '#000',
    background: '#000000',
    backgroundSecondary: '#0e0f12',
    border: '#262626',
    tint: tintColor,
    tintSecondary: tintSecondaryColor,
    red1: '#d63a49',
    red2: '#322424',
    icon: '#5f5f5f',
    green1: '#206b31',
    green2: '#293126',
    shadow: '#656464',
    primary: primary,
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
