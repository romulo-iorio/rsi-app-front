import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const PreOxygenation: React.FC = () => {
  const { goToPositioning, goToRapidSequenceInductionTips } = useRoutes();

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[80%] !pt-[0rem]">
        <video className="!w-full !h-full" autoPlay controls>
          <source src="/pre-oxygenation.mp4" type="video/mp4" />
        </video>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToPositioning} label="Voltar" />

        <Button onClick={goToRapidSequenceInductionTips} label="Próximo" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
