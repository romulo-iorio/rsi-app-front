import { useState } from "react";

import {
  BaseContentContainer,
  BaseButtonsContainer,
  InputWithLabel,
  Button,
} from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const ForgotPassword: React.FC = () => {
  const { goToLogin, goToPatientType } = useRoutes();

  const [email, setEmail] = useState<string>("");

  return (
    <>
      <BaseContentContainer>
        <InputWithLabel
          placeholder="Preencha seu e-mail"
          onChange={setEmail}
          label="E-mail"
          value={email}
        />
      </BaseContentContainer>

      <BaseButtonsContainer>
        <Button label="Voltar" onClick={goToLogin} />

        <Button label="Enviar" onClick={goToPatientType} />
      </BaseButtonsContainer>
    </>
  );
};
