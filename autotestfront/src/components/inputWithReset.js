import React, { useState } from 'react';
import Button from './button';
import './inputWithReset.css';
import { faUndo } from '@fortawesome/free-solid-svg-icons';

function InputWithReset({
	label,
	htmlName,
	defaultValue,
	datatype,
	register,
	required,
	setValue
}) {
	const [showReset, setShowReset] = useState(false);

	return (
		<div className="input-group">
			<label>{label}</label>
			<input
				name={htmlName}
				ref={register({ required })}
				type={datatype}
				onChange={() => {
					if (!showReset) {
						setShowReset(true);
					}
				}}
				required
			/>

			{showReset && (
				<Button
					type="default"
					level="secondary"
					icon={faUndo}
					onClick={() => {
						setValue(htmlName, defaultValue);
						setShowReset(false);
					}}
				>
					Reset
				</Button>
			)
			}
		</div >
	);
}

export default InputWithReset;
