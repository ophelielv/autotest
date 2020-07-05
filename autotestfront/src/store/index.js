import createRootReducer from '../reducers';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createBrowserHistory()

const configureStore = (preloadedState) => createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            routerMiddleware(history)
        )
       // other store enhancers if any
    )
);

export default configureStore;