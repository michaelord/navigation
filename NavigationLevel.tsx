// NOTE: https://codyhouse.co/ds/components/app/back-to-top

import * as React from 'react';

import {Link} from 'components/editable';
import {NavigationLevelProps, NavItem} from './';

export class NavigationLevel extends React.PureComponent<NavigationLevelProps> {
	base: string = 'nav-level';

	renderLink(item: NavItem): React.ReactNode {
		return <Link base="nav" {...item} />;
	}

	render(): React.ReactNode {
		const {items} = this.props;

		if (!items) {
			return null;
		}

		const Level = (items: Array<NavItem>, depth: number = 0) => {
			return (
				<ul className={this.base}>
					{items.map((item, i) => {
						const {items} = item;

						return (
							<li key={`l-${i}`}>
								{item.href ? (
									this.renderLink(item)
								) : (
									<span className="a">
										<span className="nav__text">{item.label}</span>
									</span>
								)}
								{items && Level(items, depth + 1)}
							</li>
						);
					})}
				</ul>
			);
		};

		return Level(items);
	}
}
