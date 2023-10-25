import { InputWithLabel, Button } from "@/app/components";

export const Login: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full h-full gap-[2rem]">
        <InputWithLabel label="E-mail" placeholder="Preencha seu e-mail" />

        <InputWithLabel
          label="Senha"
          placeholder="Preencha sua senha"
          password
        />
      </div>

      <div className="absolute flex items-center justify-around w-[79%] h-[5rem] bottom-[3rem]">
        <Button label="Recuperar senha" />

        <Button label="Cadastro" />

        <Button label="Entrar" />
      </div>
    </>
  );
};
