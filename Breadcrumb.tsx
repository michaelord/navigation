import IconHome from 'components/icon/home.inline.svg';
import React from 'react';
import './Breadcrumb.scss';
import {Navigation, NavigationProps} from './Navigation';

export const Breadcrumb = (props: NavigationProps) => {
	const {items} = props;

	if (!items) {
		return null;
	}

	//
	if (items.length > 1) {
		const l: number = items.length;

		if (items[l - 1].label === items[l - 2].label) {
			items.splice(l - 2, 1);
		}
	}

	if (items.length === 1 && items[0].href === '/') {
		return null;
	}

	items[0].icon = IconHome;

	return <Navigation name="breadcrumb" layout="inline" items={items} />;
};
