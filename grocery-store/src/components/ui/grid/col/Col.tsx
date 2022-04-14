import './Col.scss'
import { forwardRef } from "react";
import React from 'react';

type ICol = {
    className?: string;
    columns?: number | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    offset?: number | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    //children?: JSX.Element|JSX.Element[];
    children?: any;
}

const Col: React.FC<ICol> = ({
    className,
    columns,
    offset,
    children
}) => {
    //export default function Col(ICol){

    let cssClass = 'col';
    if (columns) {
        cssClass = `${`col-${columns}`}`;
    }
    if (offset) {
        cssClass += ` ${`offset-${offset}`}`;
    }
    if (className) {
        cssClass += ` ${className}`;
    }

    return (
        <div className={`${cssClass}`}>
            {children}
        </div>
    )

}

export default Col;