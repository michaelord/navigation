import IconChevronLeft from 'components/icon/chevron-left.inline.svg';
import IconChevronRight from 'components/icon/chevron-right.inline.svg';
import React from 'react';
import {Navigation} from './';
import './Pagination.scss';

import {LinkItem} from 'components/editable';

import * as Utils from 'components/libs';

import * as Types from 'components/types';

export type PaginationProps = {
	current?: number;
	total?: number;
	pattern?: Types.Text;
	base?: Types.Text;
};

export const Pagination = (props: PaginationProps) => {
	const {current = 1, total = 0, pattern = 'page/{page}/', base = '/'} = props;

	if (total < 2) {
		return null;
	}

	const pages: Array<LinkItem> = [];

	pages.push({
		label: 'Prev',
		href:
			current > 1
				? Utils.replaceTokens(`${base}${pattern}`, {
						page: current - 1,
				  })
				: null,
		icon: IconChevronLeft,
	});

	Array.from({length: total}).forEach((_, i) => {
		pages.push({
			label: String(i + 1),
			href:
				i + 1 === current
					? base
					: Utils.replaceTokens(`${base}${pattern}`, {
							page: i + 1,
					  }),
			isActive: i + 1 === current,
		});
	});

	pages.push({
		label: 'Next',
		href:
			current < total
				? Utils.replaceTokens(`${base}${pattern}`, {
						page: current + 1,
				  })
				: null,
		iconSuffix: IconChevronRight,
	});

	return <Navigation name="pagination" layout="inline" items={pages} />;
};
