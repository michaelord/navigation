import React from 'react';
import {Navigation, NavItem} from './';
import './Social.scss';

import * as Types from 'components/types';

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
