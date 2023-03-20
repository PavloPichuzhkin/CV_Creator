import React, {memo} from 'react';

import cls from "./Component.module.scss";

const ComponentD = ({title, description}:any) => {
    return (
        <div className={cls.main}>
            <div className={cls.first}>
                {title}
            </div>
            <div className={cls.second}>

                {description}
            </div>
        </div>
    );
};

export default memo(ComponentD);