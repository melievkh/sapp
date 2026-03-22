import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getMyPaymentStatus } from '@/api/payment.api';
import { MyPaymentStatusType } from '@/types/api.type';

export const useGetMyPaymentStatus = (): UseQueryResult<
  MyPaymentStatusType[],
  Error
> => {
  return useQuery<MyPaymentStatusType[], Error>({
    queryKey: ['payment'],
    queryFn: getMyPaymentStatus,
    staleTime: 24 * 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
