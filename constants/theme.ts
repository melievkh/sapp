import { Platform } from 'react-native';
import { ThemeColors } from '@/types/theme';

const tintColor = '#ffa500';
const tintSoft = '#ffae19';
const primary = '#3B82F6';

export const Colors: {
  light: ThemeColors;
  dark: ThemeColors;
} = {
  light: {
    text: '#0F172A',
    textSoft: '#64748B',
    white: '#FFFFFF',
    black: '#000000',
    background: '#F8FAFC',
    backgroundSecondary: '#FFFFFF',
    border: '#E2E8F0',
    tint: tintColor,
    tintSoft: tintSoft,
    red1: '#EF4444',
    red2: '#FEF2F2',
    green1: '#22C55E',
    green2: '#F0FDF4',
    shadow: '#000000',
    icon: '#64748B',
    primary: primary,
  },
  dark: {
    text: '#F1F5F9',
    textSoft: '#94A3B8',
    white: '#fff',
    black: '#000',
    background: '#060607',
    backgroundSecondary: '#1b1b1b',
    border: '#1E293B',
    tint: tintColor,
    tintSoft: tintSoft,
    red1: '#F87171',
    red2: '#1e1919',
    green1: '#74eca0',
    green2: '#1d2823',
    shadow: 'rgba(0,0,0,0.6)',
    icon: '#94A3B8',
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
