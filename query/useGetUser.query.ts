import { api } from "@/api";
import { User } from "@/types/api.type";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useGetUser = (): UseQueryResult<User, Error> => {
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