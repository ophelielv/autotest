import React, { useState } from 'react';
import Button from './button';
import './inputWithReset.css';
import { faUndo } from '@fortawesome/free-solid-svg-icons';

function InputWithReset({ label, currentValue, datatype }) {
	const [value, setValue] = useState(currentValue);
	const [initValue /*, setInitValue*/] = useState(currentValue);
	const [showReset, setShowReset] = useState(false);

	const handleChange = evt => {
		if (!showReset) {
			setShowReset(true);
		}

		setValue(evt.target.value);
	};

	const clickOnReset = () => {
		setValue(initValue);
		setShowReset(false);
	};
	console.log(datatype);
	return (
		<div className="input-group">
			<label>{label}</label>
			<input
				type={datatype}
				name="inp"
				value={value ? value : ''}
				onChange={handleChange}
			/>

			{showReset && (
				<Button
					type="default"
					level="secondary"
					icon={faUndo}
					onClick={clickOnReset}
				>
					Reset
				</Button>
			)}
		</div>
	);
}

export default InputWithReset;
