import {Link, LinkItem} from 'components/editable';
import IconChevronLeft from 'components/icon/chevron-left.inline.svg';
import React from 'react';
import './BackLink.scss';

import * as Types from 'components/types';

export const BackLink = (props: LinkItem) => {
	return <Link {...props} classes="back" icon={IconChevronLeft} />;
};
