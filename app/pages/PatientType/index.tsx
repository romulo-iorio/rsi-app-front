import { BaseLayout, Button } from "@/app/components";
import { PatientTypeEnum, usePageContext } from "@/app/store";
import { useRoutes } from "@/app/hooks";

const buttonsClassName = "!w-[20rem] !h-[7rem] !font-[2rem]";

export const PatientType: React.FC = () => {
  const {
    goToNotICURespiratoryTractCheckUp1,
    goToICURespiratoryTractCheckUp1,
    goToLogin,
  } = useRoutes();
  const { setPatientType } = usePageContext();

  const selectICU = () => {
    setPatientType(PatientTypeEnum.ICU);
    goToICURespiratoryTractCheckUp1();
  };

  const selectNotICU = () => {
    setPatientType(PatientTypeEnum.NOT_ICU);
    goToNotICURespiratoryTractCheckUp1();
  };

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[75%]">
        <Button
          className={buttonsClassName}
          onClick={selectICU}
          label="Paciente UTI"
        />

        <Button
          className={buttonsClassName}
          onClick={selectNotICU}
          label="Paciente Não UTI"
        />
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToLogin} label="Voltar" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
