import { useNavigate } from "react-router";
import pages from "../routes";

interface Return {
  goBack: () => void;
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
  goToRapidSequenceInductionTips: () => void;
  goToInternationalRecommendations: () => void;
  goToVortexScheme: () => void;
  goToFlowChartGeneralVision: () => void;
  goToDifficultIntubation: () => void;
  goToDifficultVentilation: () => void;
  goToRapidSequenceInduction: () => void;
  goToAwakeIntubation: () => void;
  goToAfterAnesthesicInduction: () => void;
  goToLaryngealMask: () => void;
  goToCervicalAccess: () => void;
  goToWhatAboutAnesthetists: () => void;
}

export const useRoutes = (): Return => {
  const navigate = useNavigate();

  const routes = pages.reduce((routes: Return, page) => {
    const { path } = page;
    const routerName = page.routerName as keyof Return;

    routes[routerName] = () => navigate(path);

    return routes;
  }, {} as Return);

  routes.goBack = () => navigate(-1);

  return routes;
};
