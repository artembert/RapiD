import React, { FunctionComponent, useEffect, useState } from 'react';
import { SelectedIdContext } from 'ui/entity-editor/SelectedIdContext';
import { SELECT_FEATURE_EVENT_NAME, selectFeatureDispatch } from '../intermediate-layer/events/select-feature';

interface Props {}

const EntityEditor: FunctionComponent<Props> = ({ children }) => {
    const [selectedIds, setSelectedIds] = useState([undefined]);

    useEffect(() => {
        selectFeatureDispatch.on(SELECT_FEATURE_EVENT_NAME, (ids) => {
            setSelectedIds(ids);
        });
    }, []);

    return (
        <SelectedIdContext.Provider value={selectedIds}>
            <div className='entity-editor--react-element'>{children}</div>
        </SelectedIdContext.Provider>
    );
};

export default EntityEditor;
