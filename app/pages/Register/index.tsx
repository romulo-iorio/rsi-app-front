import { useState } from "react";

import {
  BaseContentContainer,
  BaseButtonsContainer,
  InputWithLabel,
  RadioWithLabel,
  Button,
  BaseLayout,
} from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const Register: React.FC = () => {
  const { goToLogin, goToPatientType } = useRoutes();

  const [profession, setProfession] = useState("");
  const [experience, setExperience] = useState("");

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!h-[75%] overflow-x-hidden overflow-y-auto pb-[2rem]">
        <InputWithLabel label="E-mail" placeholder="Preencha seu e-mail" />

        <InputWithLabel label="Nome" placeholder="Preencha seu nome" />

        <InputWithLabel
          label="Senha"
          placeholder="Preencha sua senha"
          password
        />

        <InputWithLabel
          label="Confirmação da senha"
          placeholder="Confirme sua senha"
          password
        />

        <RadioWithLabel
          options={["Médico", "Estudante de medicina"]}
          onChange={setProfession}
          value={profession}
          label="Profissão"
        />

        <RadioWithLabel
          options={["Menos de 20", "20 a 50", "Mais de 50"]}
          label="Experiência com intubação"
          onChange={setExperience}
          value={experience}
        />
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToLogin} label="Voltar" />

        <Button onClick={goToPatientType} label="Entrar" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
