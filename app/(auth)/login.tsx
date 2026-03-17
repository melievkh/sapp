import InputField from '@/components/input';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useAppTheme } from '@/hooks/use-app-theme';
import { useLogin } from '@/query/useLogin.query';
import { createStyles } from '@/styles/auth.style';
import { useRouter } from "expo-router";
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View
} from 'react-native';

const LoginScreen = () => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const router = useRouter();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const { mutate, error } = useLogin();

  const handleLogin = () => {
    if (!login || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    mutate(
      { login, password },
      {
        onSuccess: () => router.push('/(tabs)'),
        onError: () => Alert.alert(`${error?.response?.data.message}!`)
      },
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0} // adjust if you have a header
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <ThemedView style={styles.container}>
          <StatusBar barStyle="dark-content" />

          <View style={styles.header}>
            {/* Header content */}
          </View>

          <ThemedView style={styles.card}>
            <ThemedText style={[styles.welcome]}>Welcome!</ThemedText>

            <InputField
              placeholder="Enter login"
              value={login}
              onChangeText={setLogin}
              numericOnly
              maxLength={9}
              keyboardType="number-pad"
              style={{
                container: styles.inputContainer,
                input: styles.usernameInput,
              }}
            />

            <InputField
              placeholder="Enter password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={{
                container: styles.passwordContainer,
                input: styles.passwordInput,
                toggle: styles.showPassword,
              }}
            />

            <ThemedText style={styles.policy}>
              By using the App, I accept the{' '}
              <ThemedText style={styles.link}>Public Offer</ThemedText>
            </ThemedText>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <ThemedText>Get Started</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity>
              <ThemedText style={styles.forgot}>Forgot password</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;