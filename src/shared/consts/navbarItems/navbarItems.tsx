import {
    AppRoutes,
    getRouteAbout,
    getRouteComponentsSwitcher, getRouteDesign,
    getRouteMain,
    getRouteSignIn,
    getRouteTemplates
} from "../router/router";
import React, {ReactNode} from "react";
import ResumeMaker from '../../assets/icons/ResumeMaker.svg';

export interface NavbarItemType {
    path: string;
    text: string | ReactNode;

    Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
    target?: "_blank";
}

export const navbarItem: NavbarItemType[] = [
    {
        path: getRouteMain(),
        text: AppRoutes.MAIN,
        // text: null,
        Icon: ResumeMaker,
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
        // target:'_blank',
    },
    {
        path: getRouteSignIn(),
        text: <>Login</>,

    },
];
