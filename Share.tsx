import IconFacebook from 'components/icon/facebook.inline.svg';
import IconTwitter from 'components/icon/twitter.inline.svg';
import IconLinkedIn from 'components/icon/warning.inline.svg';
import IconPinterest from 'components/icon/warning.inline.svg';
import IconMail from 'components/icon/warning.inline.svg';

import React, {memo} from 'react';
import {Navigation} from './';
import './Share.scss';

import * as Types from 'components/types';

export const Share = memo(() => {
	const links = [
		{
			label: 'Share on Twitter',
			href: '#',
			icon: IconTwitter,
		},

		{
			label: 'Share on Facebook',
			href: '#',
			icon: IconFacebook,
		},

		{
			label: 'Share on Pinterest',
			href: '#',
			icon: IconPinterest,
		},

		{
			label: 'Share on LinkedIn',
			href: '#',
			icon: IconLinkedIn,
		},

		{
			label: 'Share by Email',
			href: '#',
			icon: IconMail,
		},
	];

	return <Navigation name="share" layout="inline" items={links} />;
});
