import React, { /*useState,*/ useEffect } from 'react';
// import React, { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './navigation.css';
import { fetchAllSuites } from '../actions';

function Navigation(props) {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAllSuites());
		// eslint-disable-next-line
	}, []); // le tableau vide permet de ne lancer la fonction qu'une fois
	// c'est l'équivalent du componentDidMount()

	const suites = useSelector(state => state.suites);
	console.log(suites);
	return (
		<nav className="App-nav">
			<ul className="level-1">
				<li className="link-1 link-hover" key="link-home">
					<Link to="/">Home</Link>
				</li>
				<li className="link-1" key="suites-title">
					Suites
					<ul className="level-2">
						{suites &&
							suites.length > 0 &&
							suites.map((suite, idx) => (
								<li className="link-hover" key={`suite-${idx}`}>
									<Link
										className="link-2"
										to={`/suite/${suite.suite_id}`}
										key={`link-suite-${suite.suite_id}`}
									>
										{suite.name}
									</Link>
								</li>
							))}
					</ul>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;