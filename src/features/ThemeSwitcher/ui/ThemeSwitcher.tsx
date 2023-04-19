import React, {memo} from 'react';
import {classNames} from "shared/lib/helpers/classNames/classNames";
import {Theme} from "shared/lib/context/ThemeContext";
import {useTheme} from "shared/lib/hooks/useTheme/useTheme";
import {Button, ButtonTheme} from "shared/ui/Button";
import {Icon} from "shared/ui/Icon";
import Sun from 'shared/assets/icons/sun.svg';
import Moon from "shared/assets/icons/moon.svg";


interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <>
            <Button
                theme={ButtonTheme.CLEAR}
                className={classNames('', {}, [className])}
                onClick={toggleTheme}>
                {theme === Theme.DARK ? <Icon Svg={Moon} width={25} height={25}/> :
                    <Icon Svg={Sun} width={25} height={25}/>}


            </Button>
        </>);
});
