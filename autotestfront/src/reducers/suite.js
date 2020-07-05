// import { FETCH_SUITE_COMPLETE } from '../actions';
import { FETCH_ALLSUITES_COMPLETE } from '../actions';

const defaultState = {
	suites: [],
};

export default function (state = defaultState, action) {
	switch (action.type) {
		// case FETCH_SUITE_COMPLETE:
		// 	return action.suite;
		case FETCH_ALLSUITES_COMPLETE:
			return action.suites;
		default:
			return state;
	}
}
