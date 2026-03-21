import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { api } from '@/api';
import { User } from '@/types/api.type';

export const useGetMe = (): UseQueryResult<User, Error> => {
  return useQuery<User, Error>({
    queryKey: ['user'],
    queryFn: async () => {
      const res = await api.get('/user/me');
      return res.data;
    },
    staleTime: 1000 * 60,
    retry: false,
  });
};
