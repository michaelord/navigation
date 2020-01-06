import {Link} from 'components/editable';
import IconChevronUp from 'components/icon/chevron-up.inline.svg';
import {getModifiers} from 'components/libs';
import React from 'react';
import './BackToTop.scss';

import * as Types from 'components/types';

type Props = {
	isFixed?: boolean;
};

export const BackToTop = (props: Props) => {
	const base: string = 'back-to-top';
	const {isFixed = true} = props;

	return (
		<Link
			base="nav-link"
			classes={getModifiers(base, {
				fixed: isFixed,
			})}
			label="Back to Top"
			href="#"
			iconSuffix={IconChevronUp}
		/>
	);
};
