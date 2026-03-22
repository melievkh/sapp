import { api } from '.';

export const getMyPaymentStatus = async () => {
  const res = await api.get('/payment/me');
  return res.data;
};
