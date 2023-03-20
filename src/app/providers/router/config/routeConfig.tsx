import {RouteProps} from "react-router-dom";
import MainPage from "../../../../pages/MainPage/MainPage";
import AboutPage from "../../../../pages/AboutPage/AboutPage";
import AuthPage from "../../../../pages/AuthPage/AuthPage";
import ComponentsSwitcherPage from "../../../../pages/ComponentsSwitcherPage/ComponentsSwitcherPage";
import {getRouteMain} from "../../../../shared/consts/router/router";

export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    SIGN_IN = "signIn",
    SIGN_UP = "signUp",
    COMPONENTS_SWITCHER = "componentsSwitcher"

}

export const RoutePath: Record<AppRoutes, string> = {

    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.SIGN_IN]: "/signin",
    [AppRoutes.SIGN_UP]: "/signup",
    [AppRoutes.COMPONENTS_SWITCHER]: "/componentsSwitcher",

};
export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        // path: RoutePath.main,
        element: <MainPage/>,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>,
    },
    [AppRoutes.SIGN_IN]: {
        path: RoutePath.signIn,
        element: <AuthPage/>,
    },
    [AppRoutes.SIGN_UP]: {
        path: RoutePath.signUp,
        element: <AuthPage/>,
    },
    [AppRoutes.COMPONENTS_SWITCHER]: {
        path: RoutePath.componentsSwitcher,
        element: <ComponentsSwitcherPage/>,
    }
};