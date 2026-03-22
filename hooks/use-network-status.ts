import { useEffect, useState } from 'react';
import * as Network from 'expo-network';

export const useNetworkStatus = () => {
  const [isConnected, setIsConnected] = useState<any>(true);

  const checkNetwork = async () => {
    const state = await Network.getNetworkStateAsync();
    setIsConnected(state.isConnected);
  };

  useEffect(() => {
    checkNetwork();

    const interval = setInterval(checkNetwork, 5000); // auto check
    return () => clearInterval(interval);
  }, []);

  return { isConnected, checkNetwork };
};
