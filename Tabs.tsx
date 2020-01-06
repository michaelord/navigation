import {Accordion, Toggle} from 'components/accordion';
import {MatchMedia} from 'components/layout';
import {generateGUID} from 'components/libs';
import React, {memo, useState, useEffect} from 'react';
import {getModifiers} from 'components/libs';
import * as Dev from 'components/development';
import {ContainerQuery} from 'react-container-query';

import {Chooser} from 'components/ui';
import './Tabs.scss';

import * as Types from 'components/types';

type TabItemProps = {
	title: string;
	url?: string;
	id?: string;
	children: Types.Children;
};

type TabProps = {
	id?: string;
	selected?: number;
	useHover?: boolean;
	useAccordion?: boolean;
	layout?: 'horizontal' | 'vertical';
	layoutSm?: 'accordion' | 'select';
	items: Array<TabItemProps>;
	view?: 'mobile' | 'desktop' | 'default';
};

export const Tabs = memo((props: TabProps) => {
	const base: string = 'tabs';

	const query = {
		wide: {
			minWidth: 650,
		},
	};

	const {
		id,
		selected = 0,
		layout = 'vertical',
		useAccordion = true,
		useHover,
		items,
		view = 'default',
		layoutSm = 'accordion',
	} = props;

	const [active, setActive] = useState(selected);

	useEffect(() => {
		const query = window.location.hash;

		if (query) {
			items.forEach((item: any, index: number) => {
				if (item.id && query === `#${item.id}`) {
					setActive(index);
				}
			});
		}
	}, []);

	const guid: string = id || generateGUID(base);

	const desktop = () => {
		const atts = {
			className: getModifiers(base, {
				layout,
			}),
		};

		return (
			<div {...atts}>
				<div className={`${base}__main`}>
					<nav className="nav">
						<ul role="tablist" aria-label="[Tabs Interface]">
							{items.map((item, index) => {
								const {id, url} = item;
								const tabId = id || `${guid}-panel-${index}`;

								const atts = {
									role: 'tab',
									'aria-controls': tabId,
									'aria-selected': index === active || undefined,
									id: `${guid}-tab-${index}`,
									href: useHover && useAccordion && url ? url : `#${tabId}`,
									onClick: (ev: React.MouseEvent) => {
										ev.preventDefault();
										setActive(index);
									},
									onMouseOver: useHover
										? (ev: React.MouseEvent) => {
												ev.preventDefault();
												setActive(index);
										  }
										: undefined,
								};

								return (
									<li role="presentation" key={`nav-${index}`}>
										<a dangerouslySetInnerHTML={{__html: item.title}} {...atts} />
									</li>
								);
							})}
						</ul>
					</nav>
					<div className={`${base}__content`}>
						{items.map((item, index) => {
							const {id, children} = item;
							const tabId = id || `${guid}-panel-${index}`;
							return index === active ? (
								<div
									id={tabId}
									aria-labelledby={`${guid}-tab-${index}`}
									role="tabpanel"
									key={`content-${index}`}
								>
									{children}
								</div>
							) : null;
						})}
					</div>
				</div>
			</div>
		);
	};

	const onChange = (index: number): void => {
		setActive(index);
	};

	const mobile = () => {
		if (layoutSm === 'select') {
			return (
				<>
					<Chooser
						onChange={onChange}
						items={items.map(item => ({label: item.title}))}
						label={items[active].title}
					/>
					{items.map((item, index) => (index === active ? item.children : null))}
				</>
			);
		}

		return (
			<Accordion>
				{items.map((item, index) => (
					<Toggle {...item} isExpanded={index === active} key={`toggle-${index}`} />
				))}
			</Accordion>
		);
	};

	if (view === 'desktop') {
		return desktop();
	}

	if (view === 'mobile') {
		return mobile();
	}

	return (
		<>
			{useAccordion ? (
				<>
					<MatchMedia query="(max-width: 900px)" fallback={desktop()}>
						{mobile()}
					</MatchMedia>
					{/*
					<ContainerQuery query={query}>
						{params => {
							if (params.wide) {
								return desktop();
							}

							return mobile();
						}}
					</ContainerQuery>
					*/}
				</>
			) : (
				desktop()
			)}
		</>
	);
});
