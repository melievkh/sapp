import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getUserMe } from '@/api/user.api';
import { User } from '@/types/api.type';

export const useGetMe = (): UseQueryResult<User, Error> => {
  return useQuery<User, Error>({
    queryKey: ['user'],
    queryFn: getUserMe,
    staleTime: 24 * 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
