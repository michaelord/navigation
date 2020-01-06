import {getModifiers} from 'components/libs';
import {MenuDynamic} from 'components/navigation';
import React, {memo, useEffect} from 'react';
import './TableOfContents.scss';

import * as Types from 'components/types';

// https://codepen.io/hakimel/pen/BpKNPg
// https://codepen.io/GeoffreyCrofte/pen/xOPdLk?editors=1010

type TableOfContentsItemProps = {
	children?: Types.Children;
	title?: string;
	id: string;
};

export const TableOfContentsItem = memo((props: TableOfContentsItemProps) => {
	const base: string = 'table-of-contents';
	const {children, id} = props;

	return (
		<div className={`${base}__item`} id={id}>
			{children}
		</div>
	);
});

type TableOfContentsProps = {
	children?: Types.Children;
	type?: 'default' | 'bullet';
};

export const TableOfContents = memo((props: TableOfContentsProps) => {
	const base: string = 'table-of-contents';

	const {type = 'default', children} = props;

	if (!children) {
		return null;
	}

	const ref = React.createRef<HTMLDivElement>();

	const getPositions = () => {
		const positions: any = {};
		const scrollTop: number = document.documentElement.scrollTop;

		if (ref && ref.current) {
			const items = ref.current.querySelectorAll(`.${base}__item`);

			items.forEach(function(item) {
				const vpOffset = item.getBoundingClientRect();
				const id = item.id;

				positions[id] = vpOffset.top + scrollTop;
			});
		}

		return positions;
	};

	let positions: Array<number> = [];

	const scroll = (ev: Event) => {};

	const resize = (ev: Event) => {
		positions = getPositions();
	};

	useEffect(() => {
		window.addEventListener('scroll', scroll);
		window.addEventListener('resize', resize);

		positions = getPositions();

		return () => {
			window.removeEventListener('scroll', scroll);
			window.removeEventListener('resize', resize);
		};
	}, []);

	const items = children.map((item: any) => ({
		label: item.props.title,
		href: `#${item.props.id}`,
	}));

	const atts = {
		className: getModifiers(base, {
			type,
		}),
		ref,
	};

	return (
		<div {...atts}>
			<div className={`${base}__main`}>
				<div className={`${base}__nav`}>
					<MenuDynamic items={items} hasChrome />
				</div>

				<div className={`${base}__content`}>{children}</div>
			</div>
		</div>
	);
});
