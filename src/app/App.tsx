import {useTheme} from "shared/lib/hooks/useTheme/useTheme";
import {classNames} from "shared/lib/helpers/classNames/classNames";
import {Navbar} from "widgets/Navbar";
import {Footer} from "widgets/Footer";
import {AppRouter} from "app/providers/router";

const App = () => {
    const {theme} = useTheme()
    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar/>
            {/*<div className={'app m-1 p-1'}>something</div>*/}
            {/*//not calculated in height of components with their own scroll*/}
            <AppRouter/>
            <Footer/>
        </div>
    );
};

export default App;
