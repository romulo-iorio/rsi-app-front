import type { User } from "@/app/interfaces";

import api from "./api";

interface Body extends User {
  password: string;
}

export const registration = async (body: Body): Promise<User> => {
  const result = await api.post<User>("/registration", body);
  return result.data;
};
