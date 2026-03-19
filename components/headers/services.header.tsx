import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useAppTheme } from '@/hooks/use-app-theme';
import { User } from '@/types/api.type';
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import CustomModal from '../modal/modal';

const ServicesHeader = (data: { user: User }) => {
  const colors = useAppTheme();
  const router = useRouter()
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = async () => {
    await SecureStore.deleteItemAsync('accessToken');

    setModalVisible(false);

    router.replace('/(auth)/login');
  };

  return (
    <ThemedView style={styles.header}>
      <View>
        <ThemedText style={styles.name}>{data.user.fullname}</ThemedText>
        <ThemedText style={styles.role}>{data.user.role}</ThemedText>
      </View>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <IconSymbol size={28} name="rectangle.portrait.and.arrow.right" color={colors.icon} />
      </TouchableOpacity>

      <CustomModal
        visible={modalVisible}
        title="Log Out?"
        message="Are you sure to log out?"
        onCancel={() => setModalVisible(false)}
        onConfirm={handleLogout}
        cancelText="No"
        confirmText="Yes"
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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

export default ServicesHeader;
