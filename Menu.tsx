import * as React from 'react';

import './Menu.scss';

import Icon from 'components/icon/warning.inline.svg';

import {Scrollable} from 'components/ui';

type MenuItem = {
	label: string;
	isActive?: boolean;
	count?: number;
	href?:string;
	onClick?: (ev: MouseEvent) => void;
};

type Props = {
	items?: Array<MenuItem>;
};

export const MenuDynamic = (props: Props) => {
	const base: string = 'menu';

	const {items} = props;

	if (!items || (items && items.length === 0)) {
		return null;
	}

	return (
		<ul className={`${base} ${base}--chrome`}>
			{items.map((item, index) => {
				const {label, isActive = false, onClick, count = null, href} = item;

				const atts: any = {
					href,
					type : href ? undefined : 'button'
				};

				if (isActive) {
					atts['aria-selected'] = true;
				}

				if (onClick) {
					atts.onClick = onClick;
				}

				const Component = atts.href ? `a` : `button`

				return (
					<li key={`m-${index}`}>
						<Component {...atts}>
							<span className="text" dangerouslySetInnerHTML={{__html: label}} />
							{count !== null && <span className="count">{count}</span>}
						</Component>
					</li>
				);
			})}
		</ul>
	);
};

export const Menu = () => {
	const base: string = 'menu';

	return (
		<>
			<Scrollable>
				<ul className={base}>
					<li>
						<a href="https://codyhouse.co/ds/components/app/menu" target="_blank">
							Menu
						</a>
					</li>
					<li>
						<a href="https://codyhouse.co/ds/components/app/dropdown" target="_blank">
							Dropdown
						</a>
					</li>
					<li>
						<a href="https://codyhouse.co/ds/components/app/language-picker" target="_blank">
							Language
						</a>
					</li>
					<li>
						<a href="https://codyhouse.co/ds/components/app/full-screen-select" target="_blank">
							Select
						</a>
					</li>
				</ul>
			</Scrollable>

			<ul className={`${base} ${base}--chrome`}>
				<li>
					<a href="#">
						<Icon className="icon" />
						<span className="text">Item One</span>
					</a>
				</li>
				<li>
					<a href="#" aria-selected="true">
						<Icon className="icon" />
						<span className="text">Item Two</span>
					</a>
				</li>
				<li>
					<a href="#">
						<Icon className="icon" />
						<span className="text">Item Three</span>
					</a>
				</li>
				<li>
					<a href="#">
						<Icon className="icon" />
						<span className="text">Item Four</span>
					</a>
				</li>
				<li>
					<a href="#">
						<Icon className="icon" />
						<span className="text">Item Five</span>
					</a>
				</li>
			</ul>

			<ul className={`${base} ${base}--chrome`}>
				<li>
					<a href="#">
						<span className="text">Item One</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span className="text">Item Two</span>
					</a>
					<ul>
						<li>
							<a href="#">
								<span className="text">Sub Item One</span>
							</a>
						</li>
						<li>
							<a href="#">
								<span className="text">Sub Item Two</span>
							</a>
						</li>
						<li>
							<a href="#">
								<span className="text">Sub Item Three</span>
							</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#">
						<span className="text">Item Three</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span className="text">Item Four</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span className="text">Item Five</span>
					</a>
				</li>
			</ul>
		</>
	);
};
