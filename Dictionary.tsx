import {ArticlePreviewProps} from 'components/article/ArticlePreview';
import {CtaGroup} from 'components/content';
import {Figure, Heading, Img, LinkItem, List, RichText, Tag, Text, Time} from 'components/editable';
import {Button} from 'components/form';
import {Icon} from 'components/icon';
import IconDown from 'components/icon/chevron-down.inline.svg';
import {Container} from 'components/layout';
import * as Utils from 'components/libs';
import {MenuDynamic} from 'components/navigation';
import {SiteConsumer} from 'components/provider';
import * as Types from 'components/types';
import React, {memo, useEffect, useState} from 'react';

import './Dictionary.scss';

type DictionaryProps = {};

export const Dictionary = memo((props: DictionaryProps) => {
	const base: string = 'dictionary';

	const list = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
		'#',
	];

	return (
		<div className={Utils.getModifiers(base, {})}>
			<div className={`${base}__body`}>
				<div className={`${base}__header`}>
					<ul>
						{list.map((item, index) => (
							<li key={`a-${index}`}>{item}</li>
						))}
					</ul>
				</div>
				<div className={`${base}__main`}>
					{list.map((item, index) => (
						<div key={`b-${index}`} className={`${base}-item`}>
							<div className={`${base}-item__letter`}>{item}</div>
							<div className={`${base}-item__content`}>
								<p>
									[Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat facere
									atque fugit, perspiciatis corrupti in alias ipsa temporibus debitis harum animi
									impedit ex labore ipsam. Expedita natus iusto repellendus.]
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
});
