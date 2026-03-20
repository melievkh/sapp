import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useAppTheme } from '@/hooks/use-app-theme';
import { User } from '@/types/api.type';
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';

const ProfileHeader = (data: { user: User }) => {
  const colors = useAppTheme();
  const router = useRouter()

  const handleLogout = async () => {
    await SecureStore.deleteItemAsync('accessToken');
    router.replace('/(auth)/login');
  };

  const confirmLogout = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out?",
      [
        { text: "No", style: "cancel" },
        { text: "Yes", onPress: handleLogout }
      ],
      { cancelable: true }
    );
  };
  return (
    <ThemedView style={[styles.container, { backgroundColor: colors.backgroundSecondary }]}>
      <View>
        <ThemedText style={styles.name}>{data.user.fullname}</ThemedText>
        <ThemedText style={styles.role}>{data.user.role}</ThemedText>
      </View>

      <TouchableOpacity onPress={confirmLogout}>
        <IconSymbol size={28} name="rectangle.portrait.and.arrow.right" color={colors.icon} />
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 12,
    marginTop: 4
  },
})

export default ProfileHeader;
