import React from 'react';
import ReactDom from 'react-dom';
import uniqueId from 'lodash-es/uniqueId';
import EntityEditor from '../components/EntityEditor';
import RawTagEditor from '../components/RawTagEditor/RawTagEditor';

export function uiSidePanel(context) {
    function panel(selection) {
        const elementId = uniqueId('ideditor-side_panel-');
        selection.append('div').attr('id', elementId);

        ReactDom.render(
            <EntityEditor>
                <RawTagEditor />
            </EntityEditor>,
            document.getElementById(elementId)
        );
    }

    return panel;
}
