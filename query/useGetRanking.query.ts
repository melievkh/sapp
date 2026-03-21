import { useQuery } from '@tanstack/react-query';
import { api } from '@/api';
import { RankingItemType } from '@/types/api.type';

export const useGetPerformanceRanking = () => {
  return useQuery<RankingItemType[]>({
    queryKey: ['ranking'],
    queryFn: async () => {
      const res = await api.get('/ranking');
      return res.data.data;
    },
  });
};

export const useGetMyPerformance = () => {
  return useQuery<RankingItemType | null>({
    queryKey: ['ranking', 'me'],
    queryFn: async () => {
      const res = await api.get(`/ranking/me`);
      return res.data.data as RankingItemType;
    },
  });
};
