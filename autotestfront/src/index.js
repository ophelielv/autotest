import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore, { history } from './store/index';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

const store = configureStore();

// Fonts
// import '@openfonts/yantramanav_all';
// import 'lato-font';
// import 'notosans-fontface';

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
			{/* <Switch>
				<Route exact path="/" render={() => <div>Match</div>} />
				<Route render={() => <div>Miss</div>} />
			</Switch> */}
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
