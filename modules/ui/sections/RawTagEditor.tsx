import React, {FunctionComponent} from 'react';
import Section from '../components/Section';
import {t} from '../../core/localizer';

interface Props {

}

const RawTagEditor: FunctionComponent<Props> = ({}) => {
    return (
        <Section id='raw-tag-editor' classes={['raw-tag-editor']}
                 label={t('inspector.title_count', {title: t.html('inspector.tags'), count: 7})}>
            content
        </Section>
    );
}

export default RawTagEditor;
