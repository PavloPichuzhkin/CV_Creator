import React, { memo, useState} from 'react';
import cls from './navbar.module.scss';
// import {navbarItem} from "@/shared/consts/navbarItems/navbarItems";
import {navbarItem} from "shared/consts/navbarItems/navbarItems";
import {useActiveLink} from "shared/lib/hooks/useActiveLink/useActiveLink";
import {AppLink} from "shared/ui/AppLink";
// import {AppLink} from "../../shared/ui/AppLink";

const Navbar = () => {
        const activeLink = useActiveLink()
        const [active, setActive] = useState(activeLink)
        const [index, setIndex] = useState(activeLink.indexOf(true))

        const activateLink =
            (ind: number): void => {
                setActive((prevState: boolean[]): boolean[] => {
                    return prevState.map((el: boolean, i: number): boolean => {
                        return i === ind;
                    })
                })
                setIndex(ind)
            }
        // useEffect(() => {  //test useefeect to have 1 render!!!
        //     setActive(activeLink)
        //     setIndex(activeLink.indexOf(true))
        //
        // }, [])
        // useEffect(() => {
        //     activateLink(index)
        // }, [index,])
        console.log(active)
        console.log(index)
        console.log("Render")

        return (
            <nav className={cls.navbar}>
                {navbarItem.map((item, itemIndex) => {
                    return <span key={item.path} className={cls.navbarItem}
                                 onClick={() => {
                                     if (index !== itemIndex) {
                                         activateLink(itemIndex)
                                     }
                                 }
                                 }
                    ><AppLink
                        to={item.path}
                        // replace
                        activeClassName={active[itemIndex] ? cls.active : null}>{item.text}</AppLink></span>
                })}
            </nav>
        );
    }
;

export default memo(Navbar);
