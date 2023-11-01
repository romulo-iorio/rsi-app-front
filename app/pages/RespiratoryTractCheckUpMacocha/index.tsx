import { useState } from "react";

import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";
import { TableRow } from "./TableRow";

const tableData = [
  { parameter: "M: Mallampati II ou IV", score: "5" },
  { parameter: "A: Apneia obstrutiva do sono", score: "3" },
  { parameter: "C: Cervical com má extensão", score: "1" },
  { parameter: "O: Abertura de boca menor que 3 cm", score: "1" },
  { parameter: "C: Coma", score: "1" },
  { parameter: "H: Hipóxia severa (80%)", score: "1" },
  { parameter: "A: Não-anestesista", score: "1" },
];

interface TableRowProps {
  Input?: JSX.Element;
  centered?: boolean;
  parameter: string;
  score?: string;
}

export const RespiratoryTractCheckUpMacocha: React.FC = () => {
  const { goToRespiratoryTractCheckUpImages, goToPositioning } = useRoutes();

  const [macochaSum, setMacochaSum] = useState<number>(0);

  const renderTableData = tableData.map(({ parameter, score }) => (
    <TableRow key={parameter} parameter={parameter} score={score} />
  ));

  const onChangeMacochaSum = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const onlyNumbers = value.replace(/\D/g, "");

    setMacochaSum(Number(onlyNumbers));
  };

  const text = macochaSum >= 3 ? "IOT* difícil" : "IOT* não difícil";
  const textColor = macochaSum >= 3 ? "text-red-500" : "text-green-500";

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!h-[85%] !lg:h-[75%] pb-[1rem] !gap-[1rem] !pt-[0rem] !justify-around">
        <div className="lg:overflow-hidden overflow-y-auto w-full">
          <table className="text-black w-full">
            <thead className="text-[1.25rem]">
              <tr className="border-b-2 border-black">
                <th className="border-r border-black w-1/2 text-center">
                  Parâmetro
                </th>
                <th className="w-1/2 text-center">Pontuação</th>
              </tr>
            </thead>

            <tbody className="text-[1rem]">
              {renderTableData}

              <TableRow
                Input={
                  <input
                    className="w-full text-center bg-transparent outline-none"
                    onChange={onChangeMacochaSum}
                    value={`${macochaSum}`}
                    type="text"
                  />
                }
                parameter="SOMA"
                centered
              />
            </tbody>
          </table>

          <p
            className={`text-center text-[1.5rem] mt-[1rem] font-bold ${textColor}`}
          >
            {text}
          </p>

          <p className={`text-center text-[0.75rem] mt-[1rem] text-gray-500`}>
            *IOT = Intubação orotraqueal
          </p>
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToRespiratoryTractCheckUpImages} label="Voltar" />

        <Button onClick={goToPositioning} label="Próximo" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
