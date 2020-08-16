import React from 'react';
import './test.css';
import Button from '../components/button';
import InputWithReset from '../components/inputWithReset';
import { saveTest } from '../actions/test';
import { useDispatch, useSelector } from 'react-redux';
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

// TODO : error message
function Test(props) {
	const dispatch = useDispatch();
	const { test } = props;
	const defaultValues = initializeDefaultValue(test.parameters);
	const { register, handleSubmit, /*errors, */ setValue } = useForm({
		defaultValues,
		shouldFocusError: true,
	});

	const onSubmit = parameters => {
		console.log('SUBMIT', parameters, "TEST ID", test.id);
		dispatch(saveTest({ testId: test.id, parameters }));
	}

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
								defaultValue={param.value}
								datatype={param.datatype}
								key={param.id}
								setValue={setValue}
							/>
						</div>
					))}
				<Button icon={faSave} onClick={handleSubmit(onSubmit)} type="submit">
					Save
				</Button>
			</form>
		</article>
	);
}

export default Test;
