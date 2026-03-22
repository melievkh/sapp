import { api } from '.';

export const getUserMe = async () => {
  const res = await api.get('/user/me');
  return res.data;
};
