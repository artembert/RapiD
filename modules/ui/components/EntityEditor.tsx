import React, {FunctionComponent} from 'react';

interface Props {

}

const EntityEditor: FunctionComponent<Props> = ({children}) => {
    return (
        <div className="entity-editor--react-element">{children}</div>
    );
}

export default EntityEditor;
