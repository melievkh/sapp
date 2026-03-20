import { api } from "@/api";
import { RankingItemType } from "@/types/api.type";
import { useQuery } from "@tanstack/react-query";

export const useGetPerformanceRanking = () => {
  return useQuery<RankingItemType[]>({
    queryKey: ["ranking", "performance"],
    queryFn: async () => {
      const res = await api.get("/ranking/performance");
      return res.data.data;
    },
  });
};

export const useGetCoinsRanking = () => {
  return useQuery({
    queryKey: ["ranking", "coins"],
    queryFn: async () => {
      const res = await api.get("/ranking/coins");
      return res.data;
    },
  });
};