import React, { FunctionComponent, useContext } from 'react';
import Section from '../../components/Section';
import { t } from '../../../core/localizer';
import TagRow from './TagRow';
import { SelectedIdContext } from '../../entity-editor/SelectedIdContext';

interface Props {}

const RawTagEditor: FunctionComponent<Props> = ({}) => {
    const value = useContext(SelectedIdContext);

    return (
        <Section
            id='raw-tag-editor'
            classes={['raw-tag-editor']}
            label={t('inspector.title_count', { title: t.html('inspector.tags'), count: 7 })}>
            <p>SelectedId: {value}</p>
            <ul className='tag-list'>
                <TagRow tagName='landuse' />
            </ul>
        </Section>
    );
};

export default RawTagEditor;
