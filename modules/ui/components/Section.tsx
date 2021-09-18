import React from "react";
import {FunctionComponent} from "react";
import Disclosure from "./Disclosure";

interface Props {
    id: string,
    classes: string[],
    label: string,
    expandedByDefault: boolean,
    shouldDisplay: boolean,
}

const resolveClassName = (classes: string[], id: string) => {
    const prefix = 'section';
    return prefix + ' ' + `${prefix}-${id}` + classes.map(val => `${prefix}-${val}`).join(` `)
}

const Section: FunctionComponent<Props> = ({classes, id}) => {
    const className = resolveClassName(classes, id)
    return <div className={className}>
        <Disclosure>

        </Disclosure>
    </div>
}

export default Section;