export enum AppRoutes {
    MAIN = "Main",
    ABOUT = "About",
    TEMPLATES="Templates",
    DESIGN="Design",
    SIGN_IN = "signIn",
    SIGN_UP = "signUp",
    COMPONENTS_SWITCHER = "componentsSwitcher",

}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteTemplates = () => '/templates';
// export const getRouteDesign = () => 'https://www.figma.com/file/ZQDDpPcS0SwZfcPSeIdHdb/CV_Creator?node-id=0%3A1&t=xSNS5WLxKA84xZvr-1';
export const getRouteDesign = () => '/design';


export const getRouteSignIn = () => '/signin';
export const getRouteSignUp = () => '/signup';
export const getRouteComponentsSwitcher = () => '/componentsswitcher';


export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
