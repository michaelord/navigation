import {MatchMedia} from 'components/layout';
import {Loader} from 'components/loader';
import React, {useState} from 'react';
import './Steps.scss';

import * as Types from 'components/types';

type Step = {
	label: string;
};

type Props = {
	current: number;
	steps?: Array<Step>;
};

export const Steps = (props: Props) => {
	const base: string = 'steps';

	const {steps, current = 0} = props;

	if (!steps) {
		return null;
	}

	const [step, setStep] = useState(current);

	const desktop = () => {
		return (
			<ol>
				{steps.map((item, index) => {
					const className = index === step ? ' active' : index < step ? ' completed' : '';

					return (
						<li className={`${base}__item${className}`} key={`step-${index}`}>
							<span className={`${base}__icon`}>{index + 1}</span>
							<div>
								<span>{item.label}</span>
							</div>
						</li>
					);
				})}
			</ol>
		);
	};

	const mobile = () => {
		return (
			<div className={`${base}--mobile`}>
				<div className={`${base}__step`}>
					<Loader percent={(100 / steps.length) * (step + 1)} size={70} width={6} />
					<span className={`${base}__step-of`}>
						{step + 1} of {steps.length}
					</span>
				</div>
				<div>
					<h4>{steps[step].label}</h4>

					{step < steps.length - 1 && <span>Next: {steps[step + 1].label}</span>}
				</div>
			</div>
		);
	};

	return (
		<div className={base}>
			<MatchMedia query="(max-width: 900px)" fallback={desktop()}>
				{mobile()}
			</MatchMedia>
		</div>
	);
};
