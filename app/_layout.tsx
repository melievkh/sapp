import { ThemeProviderCustom, useThemeContext } from "@/context/theme.context";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

const queryClient = new QueryClient();

function InnerLayout() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider value={theme === "dark" ? DarkTheme : DefaultTheme}>
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