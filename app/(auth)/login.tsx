import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useAppTheme } from '@/hooks/use-app-theme';
import React, { useState } from 'react';
import {
  Alert,
  StatusBar,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { createStyles } from './auth.style';

const LoginScreen = () => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);

  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    Alert.alert('Success', `Username: ${username}`);
  };



  return (
    <ThemedView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        {/* Header content */}
      </View>

      <ThemedView style={styles.card}>
        <ThemedText style={[styles.welcome,]}>Welcome!</ThemedText>

        <View
          style={[
            styles.inputContainer,
            { borderColor: usernameFocused ? '#000' : '#ccc' },
          ]}
        >
          <TextInput
            placeholder="Enter username"
            placeholderTextColor="#7A7A7A"
            keyboardType="number-pad"
            maxLength={9}
            value={username}
            onChangeText={(text) => {
              const numericText = text.replace(/[^0-9]/g, '');
              setUsername(numericText);
            }}
            onFocus={() => setUsernameFocused(true)}
            onBlur={() => setUsernameFocused(false)}
            style={styles.usernameInput}
          />
        </View>

        <View
          style={[
            styles.passwordContainer,
            { borderColor: passwordFocused ? '#000' : '#ccc' },
          ]}
        >
          <TextInput
            placeholder="Enter password"
            placeholderTextColor="#7A7A7A"
            secureTextEntry={secure}
            value={password}
            onChangeText={(text) => setPassword(text)}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
            style={styles.passwordInput}
          />
          <TouchableOpacity onPress={() => setSecure(!secure)}>
            <ThemedText style={styles.showPassword}>{secure ? 'show' : 'hide'}</ThemedText>
          </TouchableOpacity>
        </View>

        <ThemedText style={styles.policy}>
          By using the App, I accept the{" "}
          <ThemedText style={styles.link}>Public Offer</ThemedText>
        </ThemedText>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <ThemedText >Get Started</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity>
          <ThemedText style={styles.forgot}>Forgot password</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
};

export default LoginScreen;