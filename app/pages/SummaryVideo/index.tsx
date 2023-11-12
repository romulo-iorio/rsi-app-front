import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const SummaryVideo: React.FC = () => {
  const { goToCervicalAccessVideo, goToWhatAboutAnesthetists } = useRoutes();

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[80%] !pt-[1rem]">
        <video className="!w-full !h-full" autoPlay controls>
          <source src="/pre-oxygenation.mp4" type="video/mp4" />
        </video>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToCervicalAccessVideo} label="Voltar" />

        <Button onClick={goToWhatAboutAnesthetists} label="Próximo" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
