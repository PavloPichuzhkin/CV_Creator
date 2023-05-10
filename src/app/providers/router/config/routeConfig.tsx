import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import AboutPage from "pages/AboutPage/ui/AboutPage";
import AuthPage from "pages/AuthPage/AuthPage";
import ComponentsSwitcherPage from "pages/ComponentsSwitcherPage/ui/ComponentsSwitcherPage";
import {ComponentsSwitcherPageAsync} from "pages/ComponentsSwitcherPage";

import {
    AppRoutes,
    getRouteAbout, getRouteComponentsSwitcher, getRouteDesign,
    getRouteMain,
    getRouteSignIn,
    getRouteSignUp, getRouteTemplates
} from "shared/consts/router/router";
import {DesignPage} from "pages/DesignPage";
import {TemplatesPage} from "pages/TemplatesPage";



export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage/>,
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage/>,

    },
    [AppRoutes.TEMPLATES]: {
        path: getRouteTemplates(),
        element: <TemplatesPage/>,
    },
    [AppRoutes.COMPONENTS_SWITCHER]: {
        path: getRouteComponentsSwitcher(),
        element: <ComponentsSwitcherPageAsync/>,
        // element: <ComponentsSwitcherPage/>,

    },

    [AppRoutes.DESIGN]: {
        path: getRouteDesign(),
        element: <DesignPage/>,
    },
    [AppRoutes.SIGN_IN]: {
        path: getRouteSignIn(),
        element: <AuthPage/>,
    },
    [AppRoutes.SIGN_UP]: {
        path: getRouteSignUp(),
        element: <AuthPage/>,
    },

};
