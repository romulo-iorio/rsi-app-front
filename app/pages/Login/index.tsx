import { useState } from "react";

import { InputWithLabel, BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const Login: React.FC = () => {
  const { goToForgotPassword, goToRegister, goToPatientType } = useRoutes();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <BaseLayout.Root>
      <BaseLayout.Content>
        <InputWithLabel
          placeholder="Preencha seu e-mail"
          onChange={setEmail}
          label="E-mail"
          value={email}
        />

        <InputWithLabel
          placeholder="Preencha sua senha"
          onChange={setPassword}
          value={password}
          label="Senha"
          password
        />
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToForgotPassword} label="Recuperar senha" />

        <Button onClick={goToRegister} label="Cadastro" />

        <Button onClick={goToPatientType} label="Entrar" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
