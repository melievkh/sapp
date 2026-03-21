export const getRankDisplay = (
  rank: number | undefined,
  isLoading: boolean | undefined,
) => {
  if (isLoading) return '...';
  if (!rank) return '-';

  return `#${rank}`;
};
