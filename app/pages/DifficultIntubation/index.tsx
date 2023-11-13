import { BaseLayout, Button, FlowChartQuestion } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const flowChartOptionsButtonsClassName =
  "!lg:w-[15rem] !lg:h-[5rem] !w-[8rem] !h-[3rem] ";

export const DifficultIntubation: React.FC = () => {
  const { goToLogin, goToRapidSequenceInduction, goToDifficultVentilation } =
    useRoutes();

  const onClickOnYes = () => {
    localStorage.setItem("isDifficultIntubation", "true");
    goToDifficultVentilation();
  };

  const onClickOnNo = () => {
    localStorage.setItem("isDifficultIntubation", "false");
    goToRapidSequenceInduction();
  };

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[75%]">
        <FlowChartQuestion question="IOT difícil provável?" />

        <div className="flex flex-row justify-center items-center lg:gap-[3rem] gap-[1.5rem]">
          <Button
            className={flowChartOptionsButtonsClassName}
            onClick={onClickOnYes}
            label="Sim"
          />

          <Button
            className={flowChartOptionsButtonsClassName}
            onClick={onClickOnNo}
            label="Não"
          />
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToLogin} label="Voltar" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
