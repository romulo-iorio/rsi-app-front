import api from "./api";

interface Body {
  password: string;
  token: string;
}

export const resetPassword = async (body: Body) => {
  return api.post("/reset-password", body);
};
