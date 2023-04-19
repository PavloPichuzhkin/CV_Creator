import {navbarItem} from "shared/consts/navbarItems/navbarItems";
import {useLocation} from "react-router-dom";
import {useMemo} from "react";

export function useActiveLink  (): boolean[]  {
    // const locat=useLocation()   // many renders in Navbar on every click
    // useMemo(,[active])
    const activeLink =Array.from(navbarItem, item => {
        // console.log(item.path===location.pathname)
        return item.path === location.pathname
        // return item.path===locat.pathname})
    })

    return activeLink
}
