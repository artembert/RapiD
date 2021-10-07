import React, { FunctionComponent, useEffect, useState } from 'react';
import { GraphGetterContext } from 'ui/entity-editor/GraphGetterContext';
import { SelectedIdContext } from 'ui/entity-editor/SelectedIdContext';
import { SELECT_FEATURE_EVENT, selectFeatureDispatch } from '../intermediate-layer/events/select-feature';
import RawTagEditor from './RawTagEditor/RawTagEditor';

interface Props {
    getGraph: () => CoreGraph;
}

const EntityEditor: FunctionComponent<Props> = ({ getGraph }) => {
    const [selectedIds, setSelectedIds] = useState([] as string[]);

    useEffect(() => {
        selectFeatureDispatch.on(SELECT_FEATURE_EVENT, (selectedIds) => {
            setSelectedIds(selectedIds);
        });
    }, []);

    return (
        <SelectedIdContext.Provider value={selectedIds}>
            <GraphGetterContext.Provider value={getGraph}>
                <div className='entity-editor--react-element'>
                    <RawTagEditor />
                </div>
            </GraphGetterContext.Provider>
        </SelectedIdContext.Provider>
    );
};

export default EntityEditor;
