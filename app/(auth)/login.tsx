import InputField from '@/components/input';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useAppTheme } from '@/hooks/use-app-theme';
import { useLogin } from '@/query/useLogin.query';
import { createStyles } from '@/styles/auth.style';
import { useRouter } from "expo-router";
import React, { useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View
} from 'react-native';

const LoginScreen = () => {
  const colors = useAppTheme();
  const styles = createStyles(colors);
  const router = useRouter();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const { mutate, error, isError, isPending, reset } = useLogin();

  const handleLogin = () => {
    mutate(
      { login, password },
      {
        onSuccess: () => router.push('/(tabs)'),
      },
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
    >
      <View style={{ flexGrow: 1 }}>
        <ThemedView style={styles.container}>

          <View style={styles.header}>
            {/* Header content */}
          </View>

          <ThemedView style={styles.card}>
            <ThemedText style={[styles.welcome]}>Welcome!</ThemedText>

            <InputField
              placeholder="Enter login"
              value={login}
              onChangeText={(text) => {
                setLogin(text);
                if (isError) reset();
              }}
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
              onChangeText={(text) => {
                setPassword(text);
                if (isError) reset();
              }}
              secureTextEntry
              style={{
                container: styles.passwordContainer,
                input: styles.passwordInput,
                toggle: styles.showPassword,
              }}
            />

            {isError && (
              <View style={styles.errorBox}>
                <ThemedText style={styles.errorText}>
                  ⚠️ {(error as any)?.message || "Invalid login or password"}
                </ThemedText>
              </View>
            )}

            <ThemedText style={styles.policy}>
              By using the App, I accept the{' '}
              <ThemedText style={styles.link}>Public Offer</ThemedText>
            </ThemedText>

            <TouchableOpacity
              style={[
                styles.button,
                (isPending || !login || !password) && styles.buttonDisabled
              ]}
              onPress={handleLogin}
              disabled={isPending || !login || !password}
            >
              {isPending ? (
                <ActivityIndicator size={20} />
              ) : (
                <ThemedText style={styles.buttonText}>Get Started</ThemedText>
              )}
            </TouchableOpacity>

            <TouchableOpacity>
              <ThemedText style={styles.forgot}>Forgot password</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </ThemedView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;