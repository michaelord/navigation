import * as React from 'react';

import './BackLink.scss';

import {Link, LinkItem} from 'components/editable';

import IconCheveron from 'components/icon/cheveron-left.inline.svg';

export const BackLink = (props: LinkItem) => {
	return <Link {...props} icon={IconCheveron} />;
};
