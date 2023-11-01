import { BaseLayout, Button } from "@/app/components";

const buttonsClassName = "!w-[20rem] !h-[7rem]";

const emptyFunction = () => null;

export const PatientType: React.FC = () => {
  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[75%]">
        <Button
          className={buttonsClassName}
          onClick={emptyFunction}
          label="Paciente UTI"
        />

        <Button
          className={buttonsClassName}
          onClick={emptyFunction}
          label="Paciente Não UTI"
        />
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={emptyFunction} label="Voltar" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
