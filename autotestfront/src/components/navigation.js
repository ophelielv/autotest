import React, { /*useState,*/ useEffect } from 'react';
// import React, { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './navigation.css';
import { fetchAllSuiteShort } from '../actions/suites';

function Navigation() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAllSuiteShort());
		// eslint-disable-next-line
	}, []);

	const suites = useSelector(state => state.suites);

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
