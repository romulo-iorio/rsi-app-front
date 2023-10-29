"use client";

import PageContextProvider from "@/app/store/PageContext";

import { LogoOnClipboard } from "./LogoOnClipboard";
import { Background } from "./Background";
import { MenuButton } from "./MenuButton";
import { Clipboard } from "./Clipboard";
import { Menu } from "./Menu";

interface Props {
  children: React.ReactNode;
  title: string;
}

export const PageLayout: React.FC<Props> = ({ title, children }) => (
  <PageContextProvider title={title}>
    <Background>
      <div className="flex w-screen h-screen justify-center items-center">
        <div className="flex flex-col justify-start items-center relative w-full lg:w-[35rem] md:lg:h-[40rem] h-[80%]">
          <Menu />

          <Clipboard>
            <MenuButton />

            <LogoOnClipboard />

            <div className="absolute left-1/2 transform -translate-x-1/2 top-[8rem] w-full h-[80%] overflow-y-auto overflow-x-hidden z-[3]">
              {children}
            </div>
          </Clipboard>
        </div>
      </div>
    </Background>
  </PageContextProvider>
);
