import * as React from 'react';

import './Steps.scss';

import {MatchMedia} from 'components/layout';

type Step = {
	label: string,
};

type Props = {
	steps?: Array<Step>;
};

export const Steps = (props: Props) => {
	const base: string = 'steps';

	const {steps} = props;

	if (!steps) {
		return null;
	}

	const desktop = () => {
		return (
			<ol>
				{steps.map((step, index) => {
					return (
						<li className={`${base}__item`} key={`step-${index}`}>
							<span className={`${base}__icon`}></span>
							<div>
								<span>{step.label}</span>
							</div>
						</li>
					);
				})}
			</ol>
		);
	};

	const mobile = () => {
		return <div>mobile steps</div>;
	};

	return (
		<div className={base}>
			<MatchMedia query="(max-width: 900px)" fallback={desktop()}>
				{mobile()}
			</MatchMedia>
		</div>
	);
};
