// import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from "./ThemeContext";
// import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from "./ThemeContext";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "shared/lib/context/ThemeContext";

import {useState, useMemo, FC, ReactNode, PropsWithChildren} from "react";

const ThemeProvider:FC<PropsWithChildren> = ({children}) => {
    const defaultTheme =
        (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme: theme,
            setTheme: setTheme,
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
            </ThemeContext.Provider>
    );
};

export default ThemeProvider;
