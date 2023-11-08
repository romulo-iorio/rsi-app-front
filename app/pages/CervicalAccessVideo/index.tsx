import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const CervicalAccessVideo: React.FC = () => {
  const { goToRapidSequenceInductionTips, goToCervicalAccess } = useRoutes();

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[80%] !pt-[0rem]">
        <video className="!w-full !h-full" autoPlay controls>
          <source src="/cervical-access.mp4" type="video/mp4" />
        </video>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToCervicalAccess} label="Voltar" />

        <Button onClick={goToRapidSequenceInductionTips} label="Próximo" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
