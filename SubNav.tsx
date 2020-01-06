import React, {memo} from 'react';
import {Navigation, NavigationProps} from './Navigation';
import './SubNav.scss';

export const SubNav = memo((props: NavigationProps) => {
	const {items} = props;

	if (!items) {
		return null;
	}

	return <Navigation layout="inline" className="subnav" items={items} />;
});
