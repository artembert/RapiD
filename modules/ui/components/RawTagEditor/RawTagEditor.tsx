import React, { FunctionComponent, useContext } from 'react';
import Section from '../../components/Section';
import { t } from '../../../core/localizer';
import TagRow from './TagRow';
import { SelectedIdContext } from '../../entity-editor/SelectedIdContext';
import { getCombinedTags } from '../../entity-editor/get-combined-tags';
import { GraphGetterContext } from '../../entity-editor/GraphGetterContext';

interface Props {}

const RawTagEditor: FunctionComponent<Props> = ({}) => {
    const selectedId = useContext(SelectedIdContext);
    const graphGetter = useContext(GraphGetterContext);

    const tags = Object.entries(getCombinedTags(selectedId, graphGetter().entities));

    return (
        <Section
            id='raw-tag-editor'
            classes={['raw-tag-editor']}
            label={t('inspector.title_count', { title: t.html('inspector.tags'), count: 7 })}>
            <p>SelectedId: {selectedId}</p>
            <table>
                <tbody>
                    {tags.map(([tagName, value]) => (
                        <tr key={tagName}>
                            <td>{tagName}</td>
                            <td>{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ul className='tag-list'>
                {tags.map(([tagName, value]) => (
                    <TagRow tagName={tagName} value={value} key={tagName} />
                ))}
            </ul>
        </Section>
    );
};

export default RawTagEditor;
