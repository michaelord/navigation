import * as React from 'react';

import './Pagination.scss';

import {Navigation} from './';

import IconLeft from 'components/icon/cheveron-left.inline.svg';
import IconRight from 'components/icon/cheveron-right.inline.svg';

// export type PaginationProps = {};

export const Pagination = (/*props: PaginationProps*/) => {
	const links = [
		{
			label: 'Prev',
			href: '#1',
			icon: IconLeft,
		},
		{
			label: '1',
			href: '#1',
		},
		{
			label: '2',
			href: '#2',
		},
		{
			label: '3',
			href: '#3',
		},
		{
			label: '4',
			href: '#4',
		},
		{
			label: 'Next',
			href: '#4',
			iconSuffix: IconRight,
		},
	];

	return <Navigation name="pagination" layout="inline" items={links} />;
};
