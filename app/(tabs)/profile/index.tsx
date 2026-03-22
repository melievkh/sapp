import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import ErrorState from '@/components/error-state';
import ThemeModal from '@/components/modal/theme/theme-modal';
import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useAppTheme } from '@/hooks/use-app-theme';
import { useGetMe } from '@/query/useGetMe.query';
import { createStyles } from '@/styles/profile.styles';

const ProfileScreen = () => {
  const colors = useAppTheme();
  const styles = createStyles(colors);
  const router = useRouter();

  const [themeModalVisible, setThemeModalVisible] = useState<boolean>(false);

  const { data: user, isLoading, error, refetch } = useGetMe();

  if (isLoading) return <ActivityIndicator size="large" />;
  if (error) return <ErrorState onRetry={refetch} />;

  const handleNavPress = (screen: any) => router.push(screen);

  const handleLogout = async () => {
    await SecureStore.deleteItemAsync('accessToken');
    router.replace('/(auth)/login');
  };

  const confirmLogout = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [
        { text: 'No', style: 'cancel' },
        { text: 'Yes', onPress: handleLogout },
      ],
      { cancelable: true },
    );
  };

  const navItems = [
    { title: 'Payments', screen: '/(tabs)/profile/payment' },
    { title: 'My Courses', screen: '/(tabs)/profile/courses' },
    {
      title: 'Appearance',
      screen: '',
      onPress: () => setThemeModalVisible(true),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileContainer}>
        <View>
          <ThemedText style={styles.name}>
            {user ? user?.fullname : 'User'}
          </ThemedText>
          <ThemedText style={styles.role}>{user?.role}</ThemedText>
        </View>

        <TouchableOpacity onPress={confirmLogout}>
          <IconSymbol
            size={28}
            name="rectangle.portrait.and.arrow.right"
            color={colors.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Navigation Bar */}
      <View style={styles.navContainer}>
        {navItems.map((item) => (
          <TouchableOpacity
            key={item.title}
            style={styles.navItem}
            onPress={item.onPress || (() => handleNavPress(item.screen))}
          >
            <ThemedText style={styles.navText}>{item.title}</ThemedText>
            <IconSymbol size={16} name="chevron.right" color={colors.icon} />
          </TouchableOpacity>
        ))}
      </View>

      <ThemeModal
        visible={themeModalVisible}
        onClose={() => setThemeModalVisible(false)}
      />
    </ScrollView>
  );
};

export default ProfileScreen;
