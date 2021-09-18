import React from "react";
import {FunctionComponent} from "react";

interface Props {
    name: string,
    svgClasses: string[],
    useClass: string,
}

const resolveClassName = (classes: string[]) => {
    return 'icon' + ' ' + classes.join(` `)
}

const Icon: FunctionComponent<Props> = ({name, svgClasses, useClass}) => {
    return <svg className={resolveClassName(svgClasses)}>
        <svg className="icon pre-text">
            <use xlink:href={name} className={useClass}/>
        </svg>
    </svg>
}

export default Icon;