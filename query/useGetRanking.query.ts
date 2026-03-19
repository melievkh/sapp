import { api } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useGetPerformanceRanking = () => {
  return useQuery({
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