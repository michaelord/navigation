import {Img} from 'components/media';
import {Text} from 'components/editable';
import React, {memo} from 'react';
import './Logo.scss';

import * as Types from 'components/types';

type Props = {
	image?: Types.Image;
	title: string;
	href?: Types.Url;
	isHome?: boolean;
};

export const Logo = memo((props: Props) => {
	const base: string = 'logo';
	const {image, title, href = '/', isHome = false} = props;

	const isLink: boolean = !!(href && !isHome);

	const atts: any = {
		className: base,
		href: isLink ? href : undefined,
		title: image ? title : undefined,
	};

	const Tag = isLink ? 'a' : 'span';

	return <Tag {...atts}>{image ? <Img {...image} /> : <Text content={title} />}</Tag>;
});
