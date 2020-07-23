import React from 'react';
import './test.css';
import Button from '../components/button';
import InputWithReset from '../components/inputWithReset';
import { faSave } from '@fortawesome/free-solid-svg-icons';

function Test(props) {
	const { test } = props;
	
	const clickOnSave = () => console.log('TODO');

	return (
		<article className="test">
			<h3>{test.name}</h3>

			<p>{test.description}</p>

			{test.parameters &&
				test.parameters.length > 0 &&
				test.parameters.map(param => (
					<InputWithReset
						label={param.name}
						currentValue={param.value}
						key={param.id}
					/>
				))}

			<Button icon={faSave} onClick={clickOnSave}>
				Save
			</Button>
		</article>
	);
}

export default Test;
