import { RapidSequenceInductionTips } from "@/app/components/RapidSequenceInductionTips";
import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const RapidSequenceInductionDosesAndTips: React.FC = () => {
  const { goToCervicalAccessVideo, goToSummaryVideo } = useRoutes();

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[80%] !pt-[0rem] !pb-[3rem]">
        <div className="flex flex-row h-full w-full text-black text-[0.9rem] md:text-[1rem] lg:text-[1rem] items-center justify-center">
          <div className="flex flex-col w-1/2 h-full justify-center gap-[2rem]">
            <span>
              <b>Doses para pacientes com 70kg:</b>
              <p>Alfentanil 15μg/kg (1.5ml) EV</p>
              <p>Etomidato 0,3mg/kg (10ml) EV</p>
              <p>Rocurônio 0.9mg/kg (7ml) EV</p>
            </span>

            <span>
              <b>Alternativa:</b>
              <p>Fentanil 2μg/kg (3ml)</p>
              <p>Cetamina 1.5mg/kg (2ml) </p>
              <p>Succinilcolina 1.5mg/kg (100μg)</p>
            </span>
          </div>

          <RapidSequenceInductionTips />
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToCervicalAccessVideo} label="Voltar" />

        <Button onClick={goToSummaryVideo} label="Próximo" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
