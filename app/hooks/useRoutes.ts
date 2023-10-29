import { useNavigate } from "react-router";
import pages from "../routes";

interface Return {
  goToForgotPassword: () => void;
  goToNewPassword: () => void;
  goToRegister: () => void;
  goToLogin: () => void;
  goToPatientType: () => void;
  goToNotICURespiratoryTractCheckUp1: () => void;
  goToNotICURespiratoryTractCheckUp2: () => void;
  goToICURespiratoryTractCheckUp1: () => void;
  goToICURespiratoryTractCheckUp2: () => void;
  goToPositioning: () => void;
  goToPreOxygenation: () => void;
  goToRapidSequenceInduction: () => void;
  goToAwakeIntubation: () => void;
  goToInternationalRecommendations: () => void;
  goToVortexScheme: () => void;
  goToFlowChartGeneralVision: () => void;
}

export const useRoutes = (): Return => {
  const navigate = useNavigate();

  return pages.reduce((routes: Return, page) => {
    const { path } = page;
    const routerName = page.routerName as keyof Return;

    routes[routerName] = () => navigate(path);

    return routes;
  }, {} as Return);
};
