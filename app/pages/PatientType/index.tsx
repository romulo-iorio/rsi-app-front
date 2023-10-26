import { BaseContentContainer, BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

const buttonsClassName = "!w-[20rem] !h-[7rem] !font-[2rem]";

export const PatientType: React.FC = () => {
  const { goToNotICURespiratoryTractCheckUp1 } = useRoutes();

  return (
    <BaseLayout.Root>
      <BaseLayout.Content>
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
    </BaseLayout.Root>
  );
};
