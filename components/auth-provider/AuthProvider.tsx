import { getToken, removeToken, setToken } from '@/services/secure-store.service';
import { QueryClient } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import React, { createContext, ReactNode, useEffect, useState } from 'react';

type AuthContextType = {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  token: null,
  login: () => { },
  logout: () => { },
});

export const AuthProvider = ({
  children,
  queryClient,
}: {
  children: ReactNode;
  queryClient: QueryClient;
}) => {
  const [token, setTokenState] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkToken = async () => {
      const t = await getToken();
      if (t) setTokenState(t);
      else router.replace('/login');
    };
    checkToken();
  }, []);

  const login = async (newToken: string) => {
    await setToken(newToken);
    setTokenState(newToken);
    router.replace('/');
  };

  const logout = async () => {
    await removeToken();

    queryClient.clear();

    setTokenState(null);

    router.replace('/login');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};