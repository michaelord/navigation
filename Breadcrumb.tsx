import * as React from 'react';

import './Breadcrumb.scss';

import {Navigation, NavItem} from './';

import IconHome from 'components/icon/home.inline.svg';

export type BreadcrumbProps = {
	navigation?: Array<NavItem>;
};

export const Breadcrumb = (props: BreadcrumbProps) => {
	const {navigation} = props;

	if (!navigation) {
		return null;
	}

	navigation[0].icon = IconHome;

	return <Navigation name="breadcrumb" layout="inline" items={navigation} />;
};
