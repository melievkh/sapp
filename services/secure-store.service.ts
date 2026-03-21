import * as SecureStore from 'expo-secure-store';

export const setToken = async (token: string) => {
  await SecureStore.setItemAsync('accessToken', token);
};

export const getToken = async (): Promise<string | null> => {
  return await SecureStore.getItemAsync('accessToken');
};

export const removeToken = async () => {
  await SecureStore.deleteItemAsync('accessToken');
};
