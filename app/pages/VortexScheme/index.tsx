import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";
import Image from "next/image";

const commonTextClassName = "text-gray-500 font-bold text-md absolute";

export const VortexScheme: React.FC = () => {
  const { goToInternationalRecommendations, goToFlowChartGeneralVision } =
    useRoutes();

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[80%] !pt-[3rem] !pb-[3rem] !px-[0.5rem] relative">
        <div className="flex flex-col w-full h-full items-center justify-center">
          <Image
            src="/vortex-scheme.png"
            alt="Esquema Vortéx"
            height={400}
            width={400}
          />
        </div>

        <p className={`${commonTextClassName} top-5`}>Máscara facial</p>

        <p
          className={`${commonTextClassName} bottom-[8rem] left-[9rem] rotate-[55deg]`}
        >
          Máscara laríngea
        </p>

        <p
          className={`${commonTextClassName} bottom-[8rem] right-[9rem] -rotate-[55deg]`}
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
