import { useState } from "react";

import {
  RadioWithLabelImageAndCaption,
  BaseLayout,
  Button,
} from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const RespiratoryTractCheckUpMallampati: React.FC = () => {
  const { goToRespiratoryTractCheckUp, goToRespiratoryTractCheckUpImages } =
    useRoutes();

  const [mallampati, setMallampati] = useState("");

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!h-[80%] overflow-hidden !pt-0 !sm:pt-[1rem] !lg:pt-0">
        <RadioWithLabelImageAndCaption
          label="Classificação de Mallampati"
          options={[
            {
              caption: "Palato mole, fauce, úvula e pilares visíveis",
              imageSrc: "/Mallampati1.png",
              label: "Classe I",
            },
            {
              caption: "Palato mole, fauce e úvula visíveis",
              imageSrc: "/Mallampati2.png",
              label: "Classe II",
            },
            {
              caption: "Palato mole e base da úvula visíveis",
              imageSrc: "/Mallampati3.png",
              label: "Classe III",
            },
            {
              caption: "Apenas palato duro visível",
              imageSrc: "/Mallampati4.png",
              label: "Classe IV",
            },
          ]}
          onChange={setMallampati}
          value={mallampati}
        />
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToRespiratoryTractCheckUp} label="Voltar" />

        <Button onClick={goToRespiratoryTractCheckUpImages} label="Próximo" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
