import { RankingItemType } from '@/types/api.type';
import { api } from '.';

export const getPerformanceRanking = async () => {
  const res = await api.get('/ranking');
  return res.data.data;
};

export const getMyPerformance = async () => {
  const res = await api.get(`/ranking/me`);
  return res.data.data as RankingItemType;
};
