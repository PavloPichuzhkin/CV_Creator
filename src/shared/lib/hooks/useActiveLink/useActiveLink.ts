import {navbarItem} from "../../../consts/navbarItems/navbarItems";
// import {navbarItem} from "shared/consts/navbarItems/navbarItems";

export function useActiveLink  (): boolean[]  {
    const activeLink =Array.from(navbarItem, item => {
        // console.log(item.path===location.pathname)
        return item.path===location.pathname
    })

    return activeLink
}
