import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import suitesReducer from './suites';
import suiteReducer from './suite';
import datatypesReducer from './datatypes';

const createRootReducer = history =>
	combineReducers({
		router: connectRouter(history),
		suites: suitesReducer,
		suite: suiteReducer,
		datatypes: datatypesReducer,
		// rest of your reducers
	});
export default createRootReducer;
