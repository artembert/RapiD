import React, { FunctionComponent, useCallback, useState } from 'react';
import { t } from '../../../core';
import Icon from '../Icon';
import { serviceTaginfo } from '../../../services';
import Combobox from '../inputs/Combobox';

interface Props {
    tagName: string,
}

const TagRow: FunctionComponent<Props> = ({ tagName }) => {
    const [items, setItems] = useState([{label: tagName, value: tagName}, {label: 'Loading...', value: '__loading'}]);
    const [isKeysLoaded, setIsKeysLoaded] = useState(false);

    const loadKeys = useCallback(() => {
        if (isKeysLoaded) {
            return;
        }
        setIsKeysLoaded(true);
        serviceTaginfo.keys(
            {
                debounce: true,
                geometry: 'area',
                query: '',
            },
            (err, data) => {
                if (err) {
                    return;
                }
                setItems(data.map(({label, value}) => ({label: value, value: label})));
            }
        );
    }, []);

    const selectFocusHandler = () => loadKeys();

    return (
        <li className='tag-row'>
            <div className='inner-wrap'>
                <div className='key-wrap'>
                    <Combobox data={items} accentStyle={true} focusHandler={selectFocusHandler} />
                </div>
                <div className='value-wrap'>value</div>
                <button type='button' className='form-field-button remove' title={t('icons.remove')}>
                    <Icon name='#iD-operation-delete' />
                </button>
            </div>
        </li>
    );
};

export default TagRow;
