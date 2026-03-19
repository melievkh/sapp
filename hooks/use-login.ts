import { useMutation } from "@tanstack/react-query";
import * as SecureStore from "expo-secure-store";
import { login } from "../services/auth.service";

export const useLogin = () => {
  return useMutation({
    mutationFn: login,

    onSuccess: async (data) => {
      await SecureStore.setItemAsync("accessToken", data.accessToken);
    },

    onError: (error: any) => {
      console.log("Login error:", error?.response?.data || error.message);
    },
  });
};