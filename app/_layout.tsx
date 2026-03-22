import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import { Stack } from 'expo-router';
import { ThemeProviderCustom, useThemeContext } from '@/context/theme.context';
import { useNetworkStatus } from '@/hooks/use-network-status';

const queryClient = new QueryClient();

function InnerLayout() {
  const { theme } = useThemeContext();
  const { isConnected } = useNetworkStatus();

  useEffect(() => {
    if (isConnected === false) {
      Alert.alert('No Internet', 'Check your connection!');
    }
  }, [isConnected]);

  return (
    <ThemeProvider value={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="(auth)/login" />
        </Stack>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <ThemeProviderCustom>
      <InnerLayout />
    </ThemeProviderCustom>
  );
}
