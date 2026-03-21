import { useMutation } from '@tanstack/react-query';
import { setToken } from '@/services/secure-store.service';
import { login } from '../services/auth.service';

export const useLogin = () => {
  return useMutation({
    mutationFn: login,

    onSuccess: async (data) => {
      await setToken(data.accessToken);
    },

    onError: (error: any) => {
      console.log('Login error:', error?.response?.data || error.message);
    },
  });
};
