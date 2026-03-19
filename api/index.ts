import axios from "axios";
import * as SecureStore from "expo-secure-store";

export const api = axios.create({
  baseURL: "http://127.0.0.1:3000",
});

api.interceptors.request.use(async (config) => {
  if (!config.url?.includes('/auth/login')) {
    const token = await SecureStore.getItemAsync('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.error("API error:", error.response?.data);

    const status = error.response?.status;
    const message =
      error.response?.data?.message ||
      error.message ||
      "Unknown API error";

    if (status === 401) {
      await SecureStore.deleteItemAsync("accessToken");
    }

    return Promise.reject(new Error(message));
  }
);