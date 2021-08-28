import React from "react";
import ReactDom from "react-dom";
import FormField from "../sections/FormField";
import uniqueId from 'lodash-es/uniqueId'

export function uiSidePanel(context) {
  function panel(selection) {
    const elementId = uniqueId('ideditor-side_panel-');
    selection.append("div").attr("id", elementId);

    ReactDom.render(
      <FormField label="Property name" />,
      document.getElementById(elementId)
    );
  }

  return panel;
}
