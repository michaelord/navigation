// NOTE: https://codyhouse.co/ds/components/app/back-to-top

import {Link} from 'components/editable';
import React from 'react';
import {getModifiers} from 'components/libs';
import {NavigationLevelProps, NavItem, MegaNav} from './';
import IconDown from 'components/icon/chevron-down.inline.svg';

import * as Types from 'components/types';

export class NavigationLevel extends React.PureComponent<NavigationLevelProps> {
	base: string = 'nav-level';

	renderLink(item: NavItem, parent: NavItem | null = null): React.ReactNode {
		return <Link base="nav-link" {...item} />;
	}

	render(): React.ReactNode {
		const {items, autoIcon = false, megaNav} = this.props;

		if (!items) {
			return null;
		}

		const nextType = (items: Array<NavItem>, depth: number = 0) => {
			if (!items) {
				return null;
			}

			const type: string = getType(items, depth);

			return type === 'default' ? 'horizontal' : 'meganav';
			/*
			const isArray = Array.isArray(items);

			if (!isArray) {
				return 'meganav';
			}

			return 'horizontal';
			*/
		};

		const getType = (items: Array<NavItem>, depth: number = 0): string => {
			if (depth === 1 && megaNav === true) {
				// megamenu checks...
				const itemsIsArray: boolean = Array.isArray(items);
				const itemsIs3D: boolean = itemsIsArray ? items.every((item: any) => Array.isArray(item)) : false;

				// multidimensional array, so render as meganav
				if (itemsIs3D) {
					return 'multidimensional';
				}

				if (!itemsIsArray) {
					return 'child';
				}
			}

			return 'default';
		};

		const Level = (items: Array<NavItem>, parent: NavItem | null = null, depth: number = 0) => {
			const type: string = getType(items, depth);

			if (type === 'multidimensional') {
				return (
					<div className="nav-child">
						<MegaNav>
							{items.map((list, index) => {
								return (
									<ul key={index}>
										<li>list item here</li>
									</ul>
								);
							})}
						</MegaNav>
					</div>
				);
			}

			if (type === 'child') {
				return (
					<div className="nav-child">
						<MegaNav>{items}</MegaNav>
					</div>
				);
			}

			return (
				<ul className={`nav-child ${this.base} ${this.base}--${depth}`}>
					{items.map((item, i) => {
						const {items} = item;

						const childType = items ? nextType(items, depth + 1) : null;

						const atts = {
							className: getModifiers('nav-item', {
								parent: childType !== null,
								childType,
							}),
							key: `l-${i}`,
						};

						if (childType && autoIcon) {
							item.iconSuffix = IconDown;
						}

						return (
							<li {...atts}>
								{item.href ? (
									this.renderLink(item, parent)
								) : (
									<span className="nav-link">
										<span
											className="text nav-link__text"
											dangerouslySetInnerHTML={{__html: item.label || '[NO LABEL]'}}
										/>
									</span>
								)}
								{items && Level(items, item, depth + 1)}
							</li>
						);
					})}
				</ul>
			);
		};

		return Level(items);
	}
}
