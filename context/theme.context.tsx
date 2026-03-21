import React, { createContext, useContext, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from '@/constants/theme';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
});

export const ThemeProviderCustom = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setThemeState] = useState<Theme>('light');

  useEffect(() => {
    const loadTheme = async () => {
      const saved = await SecureStore.getItemAsync('theme');
      if (saved === 'light' || saved === 'dark') {
        setThemeState(saved);
      }
    };
    loadTheme();
  }, []);

  // setter
  const setTheme = async (newTheme: Theme) => {
    setThemeState(newTheme);
    await SecureStore.setItemAsync('theme', newTheme);
  };

  const barStyle = theme === 'light' ? 'dark-content' : 'light-content';
  const backgroundColor = Colors[theme].background;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <SafeAreaProvider>
        <StatusBar
          barStyle={barStyle}
          backgroundColor={backgroundColor}
          translucent
        />
        {children}
      </SafeAreaProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
