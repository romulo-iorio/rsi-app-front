import { usePageContext } from "../store";

interface Props {
  children: React.ReactNode;
}

export const Clipboard = ({ children }: Props) => {
  const { title } = usePageContext();

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div
        className={`
        border border-1 border-black rounded-[40px] relative
        flex flex-col justify-start items-center 
        padding-[40px 70px 30px 70px]
        w-[50rem] h-[50rem] 
        bg-[#e6e6e6] 
        z-1
      `}
        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
      >
        <div
          className={`
          absolute -top-[2.5rem] left-[50%] transform translate-x-[-50%]
          flex justify-center items-center
          border border-1 border-black
          w-[25rem] h-[5rem]
          bg-[#e6e6e6]
          rounded-full
        `}
          style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}
        >
          <div
            className={`
            absolute left-[50%] transform translate-x-[-50%] -top-[2.25rem]
            border border-1 border-black border-b-0
            flex justify-center items-center
            rounded-b-none rounded-t-[2rem]
            w-[8.3rem] h-[2.25rem]
            bg-[#e6e6e6]
          `}
          >
            <div
              style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset" }}
              className="w-[1.25rem] h-[1.25rem] rounded-full bg-[#00c9aa] mt-[0.5rem] border border-black"
            />
          </div>

          <p className="text-[1.25rem] font-bold uppercase text-[#01584B]">
            {title.toUpperCase()}
          </p>
        </div>

        {children}
      </div>
    </div>
  );
};
