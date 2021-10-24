import React, { FunctionComponent, useCallback, useState } from 'react';
import { t } from '../../../core';
import Icon from '../Icon';
import { serviceTaginfo } from '../../../services';
import Combobox, { KeyValue } from '../inputs/Combobox';

interface Props {
    tagName: string;
    value: string | (string | undefined)[];
}

const TAG_VALUE_MODE = {
    Single: 'single',
    Multiple: 'multiple',
};

const TagRow: FunctionComponent<Props> = ({ tagName, value }) => {
    const [tagKeys, setTagKeys] = useState([
        { label: tagName, value: tagName },
        { label: 'Loading...', value: '__loading' },
    ]);
    const [isKeysLoaded, setIsKeysLoaded] = useState(false);
    const valuesMode = Array.isArray(value) ? TAG_VALUE_MODE.Multiple : TAG_VALUE_MODE.Single;
    let valuesCollection: KeyValue[] = [];
    if (valuesMode === TAG_VALUE_MODE.Multiple) {
        valuesCollection = (value as (string | undefined)[]).map((name) => ({ value: name, label: name }));
    }

    const loadTagKeys = useCallback(() => {
        if (isKeysLoaded) {
            return;
        }
        serviceTaginfo.keys(
            {
                debounce: true,
                geometry: 'area',
                query: '',
            },
            (err, data: { title; value }[]) => {
                if (err) {
                    return;
                }
                setTagKeys(data.map(({ title, value }) => ({ label: title, value })));
                setIsKeysLoaded(true);
            }
        );
    }, []);

    const selectFocusHandler = () => loadTagKeys();
    const handleBlur = () => console.log('Handle blur');
    const handleKeySelect = () => console.log('handleKeySelect');
    const handleValueSelect = (keyValue: KeyValue) => console.log('handleValueSelect', keyValue);

    return (
        <li className='tag-row'>
            <div className='inner-wrap'>
                <div className='key-wrap'>
                    <Combobox
                        data={tagKeys}
                        accentStyle={true}
                        focusHandler={selectFocusHandler}
                        handleSelect={handleKeySelect}
                    />
                </div>
                {valuesMode === TAG_VALUE_MODE.Single ? <div className='value-wrap'>{value}</div> : null}
                {valuesMode === TAG_VALUE_MODE.Multiple ? (
                    <Combobox
                        data={valuesCollection}
                        accentStyle={true}
                        advanceNotice={t('inspector.multiple_values')}
                        blurHandler={handleBlur}
                        handleSelect={handleValueSelect}
                    />
                ) : null}

                <button type='button' className='form-field-button remove' title={t('icons.remove')}>
                    <Icon name='#iD-operation-delete' />
                </button>
            </div>
        </li>
    );
};

export default TagRow;
