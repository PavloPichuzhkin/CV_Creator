import React, {memo, Suspense} from 'react';


import {routeConfig} from "../config/routeConfig";
import {Route, Routes} from "react-router-dom";

function AppRouter() {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}) => {
                    return <Route key={path} path={path} element={element}/>
                })}
            </Routes>
        </Suspense>
    );

}

export default memo(AppRouter);
