import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useAppTheme } from '@/hooks/use-app-theme';
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
import { createStyles } from './auth.style';
import InputField from '@/components/input';

const LoginScreen = () => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    Alert.alert('Success', `Username: ${username}`);
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
              placeholder="Enter username"
              value={username}
              onChangeText={setUsername}
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