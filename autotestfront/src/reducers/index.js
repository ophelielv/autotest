import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import suiteReducer from './suite';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    suites: suiteReducer,
    // rest of your reducers
  })
export default createRootReducer;
