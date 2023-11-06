import type { LoginBody } from "@/app/services/api/login";

export const validateData = (data: LoginBody | null) => {
  const errors: Partial<Record<keyof LoginBody, string>> = {};

  if (!data?.email) errors.email = "E-mail é obrigatório";

  if (!data?.password) errors.password = "Senha é obrigatória";

  return errors;
};
