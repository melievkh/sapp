import { api } from '.';

export const getMyGifts = async () => {
  const res = await api.get('/voucher/my-vouchers');
  return res.data.data;
};
