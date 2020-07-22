import { FETCH_SUITE_COMPLETE } from '../actions/suite';

const defaultState = {};

export default function (state = defaultState, action) {
	switch (action.type) {
		case FETCH_SUITE_COMPLETE:
			return action.suite;
		default:
			return state;
	}
}
