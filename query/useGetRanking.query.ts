import { useQuery } from '@tanstack/react-query';
import { getMyPerformance, getPerformanceRanking } from '@/api/ranking.api';
import { RankingItemType } from '@/types/api.type';

export const useGetPerformanceRanking = () => {
  return useQuery<RankingItemType[]>({
    queryKey: ['ranking'],
    queryFn: getPerformanceRanking,
    staleTime: 24 * 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};

export const useGetMyPerformance = () => {
  return useQuery<RankingItemType | null>({
    queryKey: ['ranking', 'me'],
    queryFn: getMyPerformance,
    staleTime: 24 * 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
