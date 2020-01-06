import {Icon} from 'components/icon';
import IconWarning from 'components/icon/warning.inline.svg';
import {Scrollable} from 'components/ui';
import React from 'react';
import {getModifiers} from 'components/libs';
import './Menu.scss';

import * as Types from 'components/types';

type MenuItem = {
	label: string;
	isActive?: boolean;
	count?: number;
	href?: Types.Url;
	onClick?: (ev: MouseEvent) => void;
};

type Props = {
	hasChrome?: boolean;
	items?: Array<MenuItem>;
	className?: string;
};

export const MenuDynamic = (props: Props) => {
	const base: string = 'menu';

	const {items, className, hasChrome} = props;

	if (!items || (items && items.length === 0)) {
		return null;
	}

	const atts = {
		className:
			getModifiers(base, {
				chrome: hasChrome,
			}) + `${className ? ` ${className}` : ''}`,
	};

	return (
		<ul {...atts}>
			{items.map((item, index) => {
				const {label, isActive = false, onClick, count = null, href} = item;

				const atts: any = {
					href,
					type: href ? undefined : 'button',
				};

				if (isActive) {
					atts['aria-selected'] = true;
				}

				if (onClick) {
					atts.onClick = onClick;
				}

				const Component = atts.href ? `a` : `button`;

				return (
					<li key={`m-${index}`}>
						<Component {...atts} className="xxx">
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
						<a href="https://codyhouse.co/ds/components/app/menu" className="xxx" target="_blank">
							Menu
						</a>
					</li>
					<li>
						<a href="https://codyhouse.co/ds/components/app/dropdown" className="xxx" target="_blank">
							Dropdown
						</a>
					</li>
					<li>
						<a
							href="https://codyhouse.co/ds/components/app/language-picker"
							className="xxx"
							target="_blank"
						>
							Language
						</a>
					</li>
					<li>
						<a
							href="https://codyhouse.co/ds/components/app/full-screen-select"
							className="xxx"
							target="_blank"
						>
							Select
						</a>
					</li>
				</ul>
			</Scrollable>

			<ul className={`${base} ${base}--chrome`}>
				<li>
					<a href="#" className="xxx">
						<Icon icon={IconWarning} />
						<span className="text">Item One</span>
					</a>
				</li>
				<li>
					<a href="#" aria-selected="true" className="xxx">
						<Icon icon={IconWarning} />
						<span className="text">Item Two</span>
					</a>
				</li>
				<li>
					<a href="#" className="xxx">
						<Icon icon={IconWarning} />
						<span className="text">Item Three</span>
					</a>
				</li>
				<li>
					<a href="#" className="xxx">
						<Icon icon={IconWarning} />
						<span className="text">Item Four</span>
					</a>
				</li>
				<li>
					<a href="#" className="xxx">
						<Icon icon={IconWarning} />
						<span className="text">Item Five</span>
					</a>
				</li>
			</ul>

			<ul className={`${base} ${base}--chrome`}>
				<li>
					<a href="#" className="xxx">
						<span className="text">Item One</span>
					</a>
				</li>
				<li>
					<a href="#" className="xxx">
						<span className="text">Item Two</span>
					</a>
					<ul>
						<li>
							<a href="#" className="xxx">
								<span className="text">Sub Item One</span>
							</a>
						</li>
						<li>
							<a href="#" className="xxx">
								<span className="text">Sub Item Two</span>
							</a>
						</li>
						<li>
							<a href="#" className="xxx">
								<span className="text">Sub Item Three</span>
							</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#" className="xxx">
						<span className="text">Item Three</span>
					</a>
				</li>
				<li>
					<a href="#" className="xxx">
						<span className="text">Item Four</span>
					</a>
				</li>
				<li>
					<a href="#" className="xxx">
						<span className="text">Item Five</span>
					</a>
				</li>
			</ul>
		</>
	);
};
