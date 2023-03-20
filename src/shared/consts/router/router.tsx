
export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    FORBIDDEN = 'forbidden',
    // last
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';


export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';

// TODO remake .ts file to load -> webpack + alias @ + svg ... img png
//
// Module parse failed: Unexpected token (2:7)
// You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
//     |
// > export enum AppRoutes {
// |     MAIN = 'main',
// |     ABOUT = 'about',

