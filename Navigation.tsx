import {Heading, LinkItem} from 'components/editable';
import {getModifiers} from 'components/libs';
import React from 'react';
import {NavigationLevel} from './';
import './Navigation.scss';

import * as Types from 'components/types';

type Layout = 'default' | 'inline' | 'horizontal';

export type NavItem = LinkItem & {
	items?: Array<NavItem>;
};

export type NavigationLevelProps = {
	autoIcon?: boolean;
	items?: Array<NavItem>;
	megaNav?: boolean;
};

export type NavigationProps = {
	layout?: Layout;
	items?: Array<NavItem> | null;
	title?: Types.Text;
	name?: string;
	className?: string;
	megaNav?: boolean;
};

export const hasChildren = (items: Array<NavItem> | undefined): boolean => {
	if (!items) {
		return false;
	}

	return (
		items.filter(item => {
			return item.items && item.items.length > 0;
		}).length > 0
	);
};

export const isNavigationValid = (items: Array<NavItem> | undefined): boolean => {
	if (!items || (items && items.length === 0)) {
		return false;
	}

	return true;
};

export class Navigation extends React.PureComponent<NavigationProps> {
	base: string = 'nav';

	renderNavigation(): React.ReactNode {
		const {items, layout, megaNav} = this.props;

		if (!items) {
			return null;
		}

		return <NavigationLevel items={items} megaNav={megaNav} autoIcon={layout === 'horizontal'} />;
	}

	render(): React.ReactNode {
		const {layout = 'default', title, name, items, className} = this.props;

		if (!items) {
			return null;
		}

		const isNested: boolean = hasChildren(items);

		const atts = {
			className:
				getModifiers(this.base, {
					name,
					layout,
					nested: isNested,
				}) + (className ? ` ${className}` : ''),
		};

		return (
			<nav {...atts}>
				<Heading title={title} />
				{this.renderNavigation()}
			</nav>
		);
	}
}
