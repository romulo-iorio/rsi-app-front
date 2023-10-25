import * as Pages from "./pages";

interface RouteProps {
  Component: React.PropsWithChildren<any>;
  name: string;
  path: string;
}

const pages: RouteProps[] = [
  {
    Component: Pages.ForgotPassword,
    name: "Recuperar senha",
    path: "/forgot-password",
  },
  {
    Component: Pages.Login,
    name: "Login",
    path: "/",
  },
  {
    Component: Pages.NewPassword,
    name: "Mudar senha",
    path: "/change-password",
  },
];

export default pages;
