// NOTE: https://codyhouse.co/ds/components/app/back-to-top

import * as React from 'react';

import './BackToTop.scss';

import IconCheveronUp from 'components/icon/cheveron-up.inline.svg';

import {getModifiers} from 'components/libs';

type Props = {
	isFixed?: boolean;
};

export const BackToTop = (props: Props) => {
	const base: string = 'back-to-top';
	const {isFixed = true} = props;

	const atts = {
		className: getModifiers(base, {
			fixed: isFixed,
		}),
	};

	return (
		<a {...atts} href="#">
			<IconCheveronUp className="icon" />
		</a>
	);
};
