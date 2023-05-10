import React, {memo, useMemo, useState} from 'react';
import cls from './navbar.module.scss';
// import {navbarItem} from "@/shared/consts/navbarItems/navbarItems";
import {navbarItem} from "shared/consts/navbarItems/navbarItems";
import {useActiveLink} from "shared/lib/hooks/useActiveLink/useActiveLink";
import {AppLink} from "shared/ui/AppLink";
import {TestSvgImgPgn} from "widgets/testSvgImgPgn/TestSvgImgPgn";
import {classNames} from "shared/lib/helpers/classNames/classNames";
import {ThemeSwitcher} from "features/ThemeSwitcher";

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
        // console.log(active)

        return (
            <nav className={classNames(cls.navbar)}>
                <div className={classNames(cls.navbarContainer)}>
                    {navbarItem.map((item, itemIndex) => {

                        return <div key={item.path} className={classNames(cls.navbarItem)}>
                            <AppLink onClick={() => {
                                if (index !== itemIndex) {
                                    activateLink(itemIndex)
                                }
                            }
                            }
                                     to={item.path}
                                     activeClassName={active[itemIndex] ? cls.active : null}>{item.Icon ?
                                // activeClassName={classNames('', {[cls.active]: active[itemIndex]},)}>{item.Icon ?
                                <item.Icon/> : item.text}</AppLink></div>
                    })}
                </div>
                <ThemeSwitcher className={cls.svgPosition}/>
                {/*<TestSvgImgPgn/>*/}
                <div></div>
                {/*i do not know why element below selected after dblclick on icon))*/}
            </nav>
        );
    }


export default memo(Navbar);
