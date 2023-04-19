import React, {memo, SVGProps, useRef} from 'react';
import cls from './Icon.module.scss';
import {classNames} from "shared/lib/helpers/classNames/classNames";

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
    width?: number;
    height?: number;

}

export const Icon = memo((props: IconProps) => {
        const {className, Svg, inverted, height, width, ...otherProps} = props
        return (

            <div className={cls.svg} style={{width: `${width}px`, height: `${height}px`}}>
                <Svg className={classNames(inverted ? cls.inverted : cls.Icon, {}, [
                    className,
                ])}
                     {...otherProps}/>
            </div>
        );
    }
)
