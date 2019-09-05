import * as React from 'react';

import './Social.scss';

import {Navigation, NavItem} from './';

type Props = {
	items?: Array<NavItem>;
};

export const Social = (props: Props) => {
	const {items} = props;

	if (!items) {
		return null;
	}

	return <Navigation name="social" layout="inline" items={items} />;
};
