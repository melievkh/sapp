import axios from "axios";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";

export const api = axios.create({
  baseURL: "http://127.0.0.1:3000",
});

api.interceptors.request.use(async (config) => {
  if (!config.url?.includes('/auth/login')) {
    const token = await SecureStore.getItemAsync('accessToken');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    // console.error("API error:", error.response?.data);

    const status = error.response?.status;
    const message =
      error.response?.data?.message ||
      error.message ||
      "Unknown API error";

    if (status === 401) {
      await SecureStore.deleteItemAsync("accessToken");
      router.replace("/(auth)/login");
    }

    return Promise.reject(new Error(message));
  }
);