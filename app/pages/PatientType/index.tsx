import { BaseContentContainer, BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

const buttonsClassName = "!w-[20rem] !h-[7rem] !font-[2rem]";

export const PatientType: React.FC = () => {
  const { goToNotICURespiratoryTractCheckUp1, goToLogin } = useRoutes();

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[75%]">
        <Button
          className={buttonsClassName}
          onClick={() => {}}
          label="Paciente UTI"
        />

        <Button
          onClick={goToNotICURespiratoryTractCheckUp1}
          className={buttonsClassName}
          label="Paciente Não UTI"
        />
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToLogin} label="Voltar" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
