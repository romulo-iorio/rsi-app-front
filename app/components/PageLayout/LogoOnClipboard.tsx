import Image from "next/image";

export const LogoOnClipboard = () => (
  <Image
    className="absolute left-1/2 transform -translate-x-1/2 top-[3rem]"
    alt="Logo of RSI App"
    src="/logo_full.svg"
    objectFit="contain"
    quality={100}
    height={150}
    width={150}
  />
);
