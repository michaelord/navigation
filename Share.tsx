import * as React from 'react';

import './Share.scss';

import {Navigation} from './';

// export type ShareProps = {};

import IconFacebook from 'components/icon/facebook.inline.svg';
import IconTwitter from 'components/icon/twitter.inline.svg';
import IconLinkedIn from 'components/icon/warning.inline.svg';

export const Share = (/*props: ShareProps*/) => {
	const links = [
		{
			label: 'Share on Facebook',
			href: '#',
			icon: IconFacebook,
		},
		{
			label: 'Share on Twitter',
			href: '#',
			icon: IconTwitter,
		},
		{
			label: 'Share on LinkedIn',
			href: '#',
			icon: IconLinkedIn,
		},
	];

	return <Navigation name="share" layout="inline" items={links} />;
};
