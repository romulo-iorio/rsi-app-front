import { Login } from "./pages";

interface RouteProps {
  Component: React.PropsWithChildren<any>;
  name: string;
  path: string;
}

const pages: RouteProps[] = [
  {
    Component: Login,
    name: "Login",
    path: "/",
  },
];

export default pages;
