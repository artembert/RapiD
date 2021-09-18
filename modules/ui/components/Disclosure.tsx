import React from "react";
import {FunctionComponent} from "react";
import Icon from "./Icon";

interface Props {
    key: string,
    label: string,
}

const Disclosure: FunctionComponent<Props> = ({key, label, children}) => {
    return <>
        <a href='#' className={'hide-toggle hide-toggle-' + key}>
            <Icon name='#iD-icon-forward' svgClasses={['pre-text']} useClass='hide-toggle-icon'/>
            <div dangerouslySetInnerHTML={{__html: label}} />
        </a>
        {children}
    </>
}

export default Disclosure;
