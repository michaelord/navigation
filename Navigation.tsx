import * as React from 'react';

import './Navigation.scss';

import {getModifiers} from 'components/libs';

import {NavItem, NavigationLevel} from './';

import {Heading, LinkItem} from 'components/editable';

type Layout = 'default' | 'inline' | 'dropdown';

export type NavigationProps = {
	layout?: Layout;
	items: Array<NavItem>;
	title?: string;
	name?: string;
};

export type NavigationLevelProps = {
	items?: Array<NavItem>;
};

export type NavItem = LinkItem & NavigationLevelProps;

export class Navigation extends React.PureComponent<NavigationProps> {
	base: string = 'nav';

	renderNavigation(): React.ReactNode {
		const {items} = this.props;

		return <NavigationLevel items={items} />;
	}

	render(): React.ReactNode {
		const {layout = 'default', title, name, items} = this.props;

		const hasChildren = items.filter(item => {
			return item.items && item.items.length > 0;
		});

		const atts = {
			className: getModifiers(this.base, {
				name,
				layout,
				nested: hasChildren.length > 0,
			}),
		};

		return (
			<nav {...atts}>
				<Heading title={title} />
				{this.renderNavigation()}
			</nav>
		);
	}
}
