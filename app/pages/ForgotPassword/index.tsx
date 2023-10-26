import {
  BaseContentContainer,
  BaseButtonsContainer,
  InputWithLabel,
  Button,
} from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const ForgotPassword: React.FC = () => {
  const { goToLogin, goToPatientType } = useRoutes();

  return (
    <>
      <BaseContentContainer>
        <InputWithLabel label="E-mail" placeholder="Preencha seu e-mail" />
      </BaseContentContainer>

      <BaseButtonsContainer>
        <Button label="Voltar" onClick={goToLogin} />

        <Button label="Enviar" onClick={goToPatientType} />
      </BaseButtonsContainer>
    </>
  );
};
