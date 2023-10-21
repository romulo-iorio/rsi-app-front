import Image from "next/image";

interface Props {
  children: React.ReactNode;
}

export const Background = ({ children }: Props) => (
  <div
    className="fixed inset-0 h-screen w-screen bg-cover bg-center"
    style={{ backgroundImage: "url(/background.png)" }}
  >
    <Image
      alt="illustration of two doctors in medical uniforms"
      src="/undraw_doctors_p6aq 1.svg"
      objectFit="contain"
      quality={100}
      layout="fill"
      className="absolute !bottom-0 !-left-[15rem] !w-[70%] !h-[70%]"
    />
    {children}
  </div>
);
