export const getRankDisplay = (rank: number | undefined, isLoading: boolean) => {
  if (isLoading) return '...';
  if (!rank) return '-';

  return `#${rank}`;
};