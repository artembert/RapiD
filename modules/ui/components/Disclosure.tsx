import React from "react";
import {FunctionComponent} from "react";
import Icon from "./Icon";

interface Props {
    keyName: string,
    label: string,
}

const Disclosure: FunctionComponent<Props> = ({keyName, label, children}) => {
    return <>
        <a href='#' className={'hide-toggle hide-toggle-' + keyName}>
            <Icon name='#iD-icon-forward' svgClasses={['pre-text']} useClass='hide-toggle-icon'/>
            <span dangerouslySetInnerHTML={{__html: label}} />
        </a>
        <div className='disclosure-wrap'>
            {children}
        </div>
    </>
}

export default Disclosure;
