import { StyleSheet, View } from 'react-native';
import { Stack } from 'expo-router';
import { ThemedText } from '@/components/themed-text';
import { useAppTheme } from '@/hooks/use-app-theme';

export default function ProfileLayout() {
  const colors = useAppTheme();

  const screens = [
    { name: 'payment', title: 'Payments' },
    { name: 'courses', title: 'My Courses' },
  ];

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />

      {screens.map((screen) => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerBackButtonDisplayMode: 'generic',
            headerShadowVisible: false,

            headerTitle: () => (
              <View
                style={[
                  styles.titleContainer,
                  { backgroundColor: colors.background },
                ]}
              >
                <ThemedText type="defaultSemiBold">{screen.title}</ThemedText>
              </View>
            ),
          }}
        />
      ))}
    </Stack>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    paddingHorizontal: 20,
    borderRadius: 30,
    minHeight: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
