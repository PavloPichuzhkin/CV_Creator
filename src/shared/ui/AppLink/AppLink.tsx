import React, {CSSProperties, memo} from 'react';
import cls from './navbar.module.scss';
import {Link, LinkProps, useLocation, useNavigate} from "react-router-dom";

interface AppLinkProps extends LinkProps {
    activeClassName?: string;
    style?: CSSProperties;
}

export const AppLink = memo(({to, children, replace, activeClassName, style}: AppLinkProps) => {
    return (<Link to={to} replace={replace} className={activeClassName} style={style}>{children}</Link>)
})
