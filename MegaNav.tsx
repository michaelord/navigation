import React from 'react';
import './MegaNav.scss';
import {Container} from 'components/layout';
import {Heading, LinkItem} from 'components/editable';
import {CtaGroup} from 'components/content';
import * as Utils from 'components/libs';
import * as Types from 'components/types';

type LinkGroup = LinkItem | Array<LinkItem>;

type Props = {
	children: Types.Children;
	cta?: LinkGroup;
	theme?: Types.Theme;
};

export const MegaNav = (props: Props) => {
	const base: string = 'meganav';
	const {theme = 'grey', children} = props;

	const title: string = 'Example title';
	const cta: LinkGroup = {label: 'Test', href: '#', priority: 'secondary'};

	const atts = {
		className: Utils.getModifiers(base, {}),
		'data-theme': theme,
	};

	return (
		<div {...atts}>
			<Container>
				<div className={`${base}__main`}>
					<div className={`content ${base}__heading`}>
						<Heading title={title} size={3} />
						<CtaGroup items={cta} className={`${base}__links`} />
					</div>
					<div className={`content ${base}__content`}>{children}</div>
				</div>
			</Container>
		</div>
	);
};
