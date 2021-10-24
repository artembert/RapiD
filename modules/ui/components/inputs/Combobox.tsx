import React, { FunctionComponent, useState, useRef, ReactElement } from 'react';
import { useOutsideClick } from 'rooks';

export interface KeyValue {
    value: string | undefined;
    label: string | number | undefined;
}

interface Props {
    className?: string;
    selectedItem?: KeyValue;
    data: KeyValue[];
    handleSelect: (keyValue: KeyValue) => void;
    accentStyle?: boolean;
    focusHandler?: () => void;
    blurHandler?: () => void;
    advanceNotice?: string;
}

const Combobox: FunctionComponent<Props> = ({
    data,
    selectedItem,
    accentStyle,
    focusHandler,
    blurHandler,
    handleSelect,
    advanceNotice,
}) => {
    const [hasAdvanceNotice, setHasAdvanceNotice] = useState(!!advanceNotice);
    const ref = useRef(null);
    const hideAdvanceNotice = () => setHasAdvanceNotice(false);
    const handleChange = (event) => handleSelect(data.find(({ value }) => value === event.target.value) as KeyValue);
    const handleBlur = () => {
        if (!selectedItem && advanceNotice) {
            setHasAdvanceNotice(true);
        }
        if (blurHandler) {
            blurHandler();
        }
    };

    useOutsideClick(ref, handleBlur);

    if (hasAdvanceNotice) {
        return (
            <>
                <input type='text' placeholder={advanceNotice} onClick={hideAdvanceNotice} />
                <button type='button' onClick={hideAdvanceNotice}>
                    *
                </button>
            </>
            // <span style={{ fontStyle: 'italic' }} onClick={hideAdvanceNotice}>
            // </span>
        );
    } else {
        return (
            <select
                onFocus={focusHandler}
                // onBlur={handleBlur}
                onChange={handleChange}
                ref={ref}
                className={
                    'combobox--react-element' +
                    (accentStyle ? ' combobox--react-element_text_bold combobox--react-element_bg_gray' : '')
                }>
                {data.map(({ value, label }) => (
                    <option value={value} key={value} defaultChecked={value === selectedItem?.value}>
                        {label}
                    </option>
                ))}
            </select>
        );
    }
};

export default Combobox;
