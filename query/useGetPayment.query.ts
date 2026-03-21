import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { api } from '@/api';
import { MyPaymentStatusType } from '@/types/api.type';

export const useGetMyPaymentStatus = (): UseQueryResult<
  MyPaymentStatusType[],
  Error
> => {
  return useQuery<MyPaymentStatusType[], Error>({
    queryKey: ['payment'],
    queryFn: async () => {
      const res = await api.get('/payment/me');
      return res.data;
    },
    staleTime: 1000 * 60,
    retry: false,
  });
};
