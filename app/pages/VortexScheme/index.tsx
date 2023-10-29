import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";
import Image from "next/image";

const commonTextClassName = "text-gray-500 font-bold text-md absolute";

export const VortexScheme: React.FC = () => {
  const { goToInternationalRecommendations, goToFlowChartGeneralVision } =
    useRoutes();

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[80%] !px-[0.5rem] relative">
        <div className="flex flex-col w-full h-full items-center justify-center">
          <Image
            src="/vortex-scheme.png"
            alt="Esquema Vortéx"
            height={400}
            width={400}
          />
        </div>

        <p className={`${commonTextClassName} top-10 lg:top-0`}>
          Máscara facial
        </p>

        <p
          className={`${commonTextClassName} bottom-[8.5rem] lg:bottom-[5rem] left-0 md:left-[5%] lg:rotate-[55deg]  rotate-[60deg]`}
        >
          Máscara laríngea
        </p>

        <p
          className={`${commonTextClassName} bottom-[8.5rem] lg:bottom-[5rem] right-0 md:right-[5%] -lg:rotate-[55deg] -rotate-[60deg]`}
        >
          Tubo traqueal
        </p>

        <p
          className={`${commonTextClassName} !text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
        >
          Traqueostomia
        </p>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToInternationalRecommendations} label="Voltar" />

        <Button onClick={goToFlowChartGeneralVision} label="Próximo" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
