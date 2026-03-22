import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getMyGifts } from '@/api/gifts.api';
import { GiftType } from '@/types/api.type';

export const useGetMyGifts = (): UseQueryResult<GiftType[], Error> => {
  return useQuery<GiftType[], Error>({
    queryKey: ['voucher'],
    queryFn: getMyGifts,
    staleTime: 24 * 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
