import { FETCH_ALLSUITESSHORT_COMPLETE } from '../actions/suites';

const defaultState = {
	suites: [],
};

export default function (state = defaultState, action) {
	switch (action.type) {
		case FETCH_ALLSUITESSHORT_COMPLETE:
			return action.suites;
		default:
			return state;
	}
}
