import React, { useState } from 'react';
import './test.css';
import Button from '../components/button';
import InputWithReset from '../components/inputWithReset';
import { useForm } from 'react-hook-form';
import { faSave } from '@fortawesome/free-solid-svg-icons';

/**
 * Transform the table of parameters from database :
 * [
 *   { 
 *     id: 1, 
 *     html_name: "login", 
 *     label: "Login", 
 *     value: "gilbert.davros@gmail.com", 
 *     datatype: "text"
 *   }, ... 
 *  ]
 * into defaultValues object :
 * {
 *    login: "gilbert.davros@gmail.com"
 * }

 * @param {*} parameters 
 */
function initializeDefaultValue(parameters) {
	return parameters.reduce((accumulator, current) => {
		accumulator[current.html_name] = current.value;
		return accumulator;
	}, {});
}

function Test(props) {
	const { test } = props;

	const { register, handleSubmit, errors, reset } = useForm({
		defaultValues: initializeDefaultValue(test.parameters),
	});
	console.log(errors);
	const onSubmit = data => console.log('SUBMIT', data);

	return (
		<article className="test">
			<h3>{test.name}</h3>

			<p>{test.description}</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				{test.parameters &&
					test.parameters.length > 0 &&
					test.parameters.map(param => (
						<div key={param.id}>
							<InputWithReset
								label={param.label}
								htmlName={param.html_name}
								register={register}
								currentValue={param.value}
								datatype={param.datatype}
								key={param.id}
							/>
							{/* {Object.entries(errors).filter(
								x => x[param.html_name] !== ''
							) && <span>{errors[param.html_name]}</span>} */}
						</div>
					))}
				{/* {errors.exampleRequired && <span>This field is required</span>} */}
				<Button icon={faSave} onClick={handleSubmit} type="submit">
					Save
				</Button>
			</form>
		</article>
	);
}

export default Test;
