import { toast } from "react-toastify";

import { BaseLayout, Button, FlowChartQuestion } from "@/app/components";
import { useRoutes } from "@/app/hooks";

import { flowChartOptionsButtonsClassName } from "..";

export const AfterAnesthesicInduction: React.FC = () => {
  const { goBack, goToLaryngealMask } = useRoutes();

  const onClick = () => {
    toast.success("Respirador");
  };

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[75%]">
        <p className="text-[1rem] lg:px-0 px-5">
          Intubação traqueal – máximo 3 tentativas (videolaringoscópio,
          laringoscópio tradicional, MacCoy). Capnógrafo disponível?​
        </p>

        <FlowChartQuestion question="Sucesso?" />

        <div className="flex flex-row justify-center items-center gap-[1rem] lg:gap-[3rem]">
          <Button
            className={flowChartOptionsButtonsClassName}
            onClick={onClick}
            label="Sim"
          />

          <Button
            className={flowChartOptionsButtonsClassName}
            onClick={goToLaryngealMask}
            label="Não"
          />
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goBack} label="Voltar" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
