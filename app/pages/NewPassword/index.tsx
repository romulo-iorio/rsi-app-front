import { InputWithLabel, BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const NewPassword: React.FC = () => {
  const { goToLogin } = useRoutes();

  return (
    <BaseLayout.Root>
      <BaseLayout.Content>
        <InputWithLabel
          label="Senha"
          placeholder="Preencha sua nova senha"
          password
        />

        <InputWithLabel
          label="Confirmação da senha"
          placeholder="Confirme sua nova senha"
          password
        />
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button label="Salvar" onClick={goToLogin} />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
