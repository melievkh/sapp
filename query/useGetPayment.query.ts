import { api } from "@/api";
import { MyPaymentStatusType } from "@/types/api.type";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useGetMyPaymentStatus = (): UseQueryResult<MyPaymentStatusType[], Error> => {
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