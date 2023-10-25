import React, { createContext, useContext } from "react";

interface PageContextProps {
  title: string;
}

export const PageContext = createContext({} as PageContextProps);

export const usePageContext = () => {
  const context = useContext(PageContext);

  if (!context)
    throw new Error("usePageContext must be used within a PageContextProvider");

  return context;
};

interface Props {
  children: React.ReactNode;
  title: string;
}

const PageContextProvider: React.FC<Props> = ({ children, title }) => {
  const value: PageContextProps = { title };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export default PageContextProvider;
