import React, {FunctionComponent, useState} from 'react';
import uniqueId from 'lodash-es/uniqueId'

interface Props {
    label: string;
}

const FormField: FunctionComponent<Props> = ({label}) => {
    const [ id ] = useState(() => uniqueId('ideditor-form_field_name-'))

    return (
        <div className="form-field form-field-name">
            <label
                className="field-label"
                htmlFor={id}
            >
        <span className="label-text">
          <span className="label-textvalue">
            <span className="localized-text" lang="en-GB">
              {label}
            </span>
          </span>
          <span className="label-textannotation"></span>
        </span>
            </label>
            <div className="form-field-input-wrap form-field-input-localized">
                <input type="text"
                       id={id}
                       className="localized-main"
                       autoComplete="new-password"
                       autoCorrect="off"
                       autoCapitalize="off"
                       spellCheck="false"
                       placeholder="Common name (if any)"/>
            </div>
        </div>
    );
};

export default FormField;
