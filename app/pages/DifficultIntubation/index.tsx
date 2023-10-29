import { BaseLayout, Button, FlowChartQuestion } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const flowChartOptionsButtonsClassName = "!w-[15rem] !h-[5rem]";

export const DifficultIntubation: React.FC = () => {
  const {
    goToFlowChartGeneralVision,
    goToRapidSequenceInduction,
    goToDifficultVentilation,
  } = useRoutes();

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[75%]">
        <FlowChartQuestion question="Intubação difícil?" />

        <div className="flex flex-row justify-center items-center gap-[3rem]">
          <Button
            onClick={goToDifficultVentilation}
            className={flowChartOptionsButtonsClassName}
            label="Sim"
          />

          <Button
            onClick={goToRapidSequenceInduction}
            className={flowChartOptionsButtonsClassName}
            label="Não"
          />
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToFlowChartGeneralVision} label="Voltar" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
