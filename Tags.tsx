import React, {memo} from 'react';

import {Text} from 'components/editable';

import {slugify} from 'components/libs';

import './Tags.scss';

type Tag = {};

type Props = {
	items?: Array<Tag>;
};

export const Tags = memo((props: Props) => {
	const base: string = 'tags';
	const {items} = props;

	if (!items || (items && items.length === 0)) {
		return null;
	}

	return (
		<ul className={base}>
			{items.map((item: any, index: number) => {
				return (
					<li key={`tag-${index}`} className={`tag`} data-tag={`${slugify(item)}`}>
						<Text content={item} />
					</li>
				);
			})}
		</ul>
	);
});
