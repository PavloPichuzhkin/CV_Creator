import {
    AppRoutes,
    getRouteAbout,
    getRouteComponentsSwitcher, getRouteDesign,
    getRouteMain,
    getRouteSignIn,
    getRouteTemplates
} from "../router/router";
import React from "react";

export interface NavbarItemType {
    path: string;
    text: string;
    Icon?: React.FC<React.SVGProps<SVGSVGElement>>; //React.VFC Deprecated Equivalent with React.FC.
    authOnly?: boolean;
    target?:"_blank";
}
export const navbarItem:NavbarItemType[] = [
    {
        path: getRouteMain(),
        text: AppRoutes.MAIN,
    },
    {
        path: getRouteAbout(),
        text: AppRoutes.ABOUT,
    },
    {
        path: getRouteTemplates(),
        text: AppRoutes.TEMPLATES,
    },
    {
        path: getRouteComponentsSwitcher(),
        text: 'Create CV',
    },
    {
        path: getRouteDesign(),
        text: 'Design',
        target:'_blank',
    },
    {
        path: getRouteSignIn(),
        text: 'Sign in',
    },
];
