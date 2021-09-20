import React, { FunctionComponent } from 'react';

interface KeyValue {
    value: string;
    label: string | number;
}

interface Props {
    className?: string;
    data: KeyValue[];
    accentStyle?: boolean;
    focusHandler?: () => void;
}

const Combobox: FunctionComponent<Props> = ({ data, accentStyle, focusHandler }) => {
    return (
        <select
            onFocus={focusHandler}
            className={
                'combobox--react-element' +
                (accentStyle ? ' combobox--react-element_text_bold combobox--react-element_bg_gray' : '')
            }>
            {data.map(({ value, label }) => (
                <option value={value} key={value}>
                    {label}
                </option>
            ))}
        </select>
    );
};

export default Combobox;
