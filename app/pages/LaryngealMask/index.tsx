import { useState } from "react";

import { BaseLayout, Button, FlowChartQuestion } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const optionsButtonsClassName =
  "!md:lg:w-[24rem] !md:lg:h-[8rem] !w-[13rem] !h-[5rem] !text-[0.75rem] opacity-[0.75]";

const contentStyle = {
  background: "url(/laryngeal-mask.png) no-repeat center center",
  backgroundSize: "contain",
  transform: "rotate(-45deg)",
};

export const LaryngealMask: React.FC = () => {
  const { goToAfterAnesthesicInduction, goToCervicalAccess } = useRoutes();
  const [showText, setShowText] = useState(false);

  const onClick = () => setShowText(true);

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-between !h-[80%] relative">
        <div
          className="w-full h-full absolute top-0 left-0 z-[-1]"
          style={contentStyle}
        />

        <p className="text-[1rem] bg-[#90C7BEAA] rounded-[1rem] p-2">
          3 tentativas com modelos/tamanhos diferentes​
        </p>

        <FlowChartQuestion question="Resultado após máscara laríngea?" />

        <div
          className="flex flex-row justify-center items-start gap-[1rem] lg:gap-[3rem]"
          style={{ paddingBottom: showText ? "0" : "2rem" }}
        >
          <div className="flex flex-col justify-center items-center gap-[0.5rem]">
            <Button
              className={optionsButtonsClassName}
              onClick={onClick}
              label="Sucesso ou insucesso com boa ventilação por máscara"
            />

            {showText && <p>Parar e pensar</p>}
          </div>

          <Button
            className={optionsButtonsClassName}
            onClick={goToCervicalAccess}
            label="Insucesso com não-ventilo, não-intubo"
          />
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToAfterAnesthesicInduction} label="Voltar" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
