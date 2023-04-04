import React, {memo} from 'react';
import cls from './Component.module.scss';

interface ISwitcherProps {
    title:string
    description: string
    showDescription:number
}
const Component = ({title, description, showDescription}:ISwitcherProps) => {

    return (
        <div className={cls.main}>
            <div className={cls.title}>
                {title}
            </div>
            <div className={cls.description}>
                {(showDescription) ? description : ''}
            </div>
        </div>
    );
};

export default memo(Component);
