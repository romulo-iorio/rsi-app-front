interface Props {
  children: React.ReactNode;
  className?: string;
}

export const BaseContentContainer: React.FC<Props> = ({
  children,
  className,
}) => (
  <div
    className={`flex flex-col items-center justify-start w-full h-full gap-[2rem] pt-[3rem] px-[0.5rem] md:px-[1rem] lg:px-[5rem] text-black ${className}`}
  >
    {children}
  </div>
);
