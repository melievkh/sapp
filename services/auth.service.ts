import { api } from "../api";

export type LoginDto = {
  login: string;
  password: string;
};

export const login = async (data: LoginDto) => {
  const res = await api.post("/auth/login", data);

  return res.data;
};