import React from "react";
import {FunctionComponent} from "react";
import Icon from "./icon";

interface Props {
    key: string,
    label: string,
}

const resolveClassName = (classes: string[], id: string) => {
    const prefix = 'disclosure';
    return prefix + ' ' + `${prefix}-${id}` + classes.map(val => `${prefix}-${val}`).join(` `)
}

const Disclosure: FunctionComponent<Props> = ({key, label}) => {
    return <>
        <a href="#" className={"hide-toggle hide-toggle-" + key}>
            <Icon  />
            {label}
        </a>
    </>
}

export default Disclosure;