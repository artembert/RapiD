import React from 'react';
import ReactDom from 'react-dom';
import uniqueId from 'lodash-es/uniqueId';
import EntityEditor from '../components/EntityEditor';

export function uiSidePanel(context) {
    function panel(selection) {
        const elementId = uniqueId('ideditor-side_panel-');
        selection.append('div').attr('id', elementId);

        ReactDom.render(<EntityEditor getGraph={context.graph} />, document.getElementById(elementId));
    }

    return panel;
}
