import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllDatatypes } from '../actions/datatypes';

import './home.css';

function Home() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAllDatatypes());
		// eslint-disable-next-line
	}, []);

	const datatypes = useSelector(state => state.datatypes);

	return (
		<main className="Main-container">
			<h1>Home</h1>
			<p>Data can be of types:</p>
			<ul>
				{datatypes &&
					datatypes.length > 0 &&
					datatypes.map(datatype => (
						<li key={datatype.data_type_id}>{datatype.name}</li>
					))}
			</ul>
		</main>
	);
}

export default Home;
