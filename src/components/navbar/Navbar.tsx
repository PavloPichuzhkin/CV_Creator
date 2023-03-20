import React, {memo, useState} from 'react';
import './navbar.scss';
import {Link, LinkProps} from "react-router-dom";
// import {navbarItem} from "@/shared/consts/navbarItems/navbarItems";
import {navbarItem} from "../../shared/consts/navbarItems/navbarItems";


const Navbar = () => {
    const AppLink = memo(({to, children, replace}: LinkProps) => {
        return (<Link to={to} replace={replace}>{children}</Link>)
    })
    return (
        <nav className="navbar">
                {navbarItem.map(item=>{
                    return <span key={item.path} className={'navbar-item'}><AppLink to={item.path} replace>{item.text}</AppLink></span>

                })}


        </nav>
    );
};

export default (Navbar);
