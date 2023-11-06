import { PiSignOut } from "react-icons/pi";
import { toast } from "react-toastify";

import { useRoutes } from "@/app/hooks";

export const LogoutButton: React.FC = () => {
  const { goToLogin } = useRoutes();

  const onClick = () => {
    window.localStorage.removeItem("token");
    toast.success(
      "Você foi deslogado com sucesso! Redirecionando para a tela de login..."
    );
    setTimeout(() => goToLogin(), 1000);
  };

  return (
    <div
      className="absolute top-[3rem] md:lg:top-[1.25rem] right-[1.25rem] cursor-pointer p-2 bg-[#90C7BE] hover:bg-[#62C8B8] rounded-md transition-all active:translate-y-1"
      onClick={onClick}
    >
      <PiSignOut className="text-black text-[1.5rem]" />
    </div>
  );
};
