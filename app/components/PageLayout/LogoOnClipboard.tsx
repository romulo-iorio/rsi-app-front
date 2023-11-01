import { usePageContext } from "@/app/store";
import Image from "next/image";

const useLogoSize = () => {
  const { title } = usePageContext();
  const isLoginPage = title === "Login";

  if (isLoginPage) return 330;

  return 220;
};

const useTopClass = () => {
  const { title } = usePageContext();
  const isCover = title === "Capa";
  const isLoginPage = title === "Login";

  if (isCover) return "top-[5rem]";

  if (isLoginPage) return "top-[5rem]";

  return "top-[3rem]";
};

interface Props {
  show?: boolean;
  size?: number;
}

export const LogoOnClipboard: React.FC<Props> = ({
  size: parsedSize,
  show,
}) => {
  const { title } = usePageContext();
  const topClass = useTopClass();
  const size = useLogoSize();

  const isCover = title === "Capa";
  if (isCover && !show) return null;

  return (
    <Image
      className={`absolute left-1/2 transform -translate-x-1/2 ${topClass}`}
      height={parsedSize ?? size}
      width={parsedSize ?? size}
      alt="Logo of RSI App"
      src="/logo_full.svg"
      objectFit="contain"
      quality={100}
    />
  );
};
