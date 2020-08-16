import React from 'react';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Suite from './scenes/suite';
import Home from './scenes/home';
import Toast from './components/toast';

function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<strong>Autotest</strong>
				</header>

				<Navigation />
				<Toast />

				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/suite/:suiteId">
						<Suite />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>

				<footer className="App-footer"> @2020 </footer>
			</div>
		</Router>
	);
}

export default App;
