import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuite } from '../actions/suite';
import './suite.css';
import Iteration from '../components/iteration';
import Button from '../components/button';
import Test from '../components/test';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

function Suite() {
	const dispatch = useDispatch();
	const { suiteId } = useParams();

	useEffect(() => {
		dispatch(fetchSuite(suiteId));
		// eslint-disable-next-line
	}, [suiteId]);

	const suite = useSelector(state => state.suite);

	const tests = suite && suite.tests ? suite.tests : [];
	const iterations = suite && suite.iterations ? suite.iterations : [];

	return (
		<main className="Main-container Suite">
			<h1>Tests suite {suiteId}</h1>
			<h2>Presentation</h2>
			<p>
				Suite description. At vero eos et accusamus et iusto odio dignissimos
				ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
				quos dolores et quas molestias excepturi sint occaecati cupiditate non
				provident, similique sunt in culpa qui officia deserunt mollitia animi,
				id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
				expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi
				optio cumque nihil impedit quo minus id quod maxime placeat facere
				possimus, omnis voluptas assumenda est, omnis dolor repellendus.
				Temporibus autem quibusdam et aut officiis debitis aut rerum
				necessitatibus saepe eveniet ut et voluptates repudiandae sint et
				molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
				delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
				perferendis doloribus asperiores repellat.
			</p>

			<section className="test-section">
				<h2>Tests</h2>
				{tests.length > 0 &&
					tests.map(test => <Test test={test} key={test.id} />)}
			</section>

			<section className="launch-button">
				<Button type="push" level="launch" icon={faRocket}>
					Launch tests
				</Button>
			</section>

			<section className="iteration-section">
				<h2>Previous launches and results</h2>
				{iterations.length > 0 &&
					iterations.map(iteration => (
						<Iteration iteration={iteration} key={iteration.id} />
					))}
			</section>
		</main>
	);
}

export default Suite;
