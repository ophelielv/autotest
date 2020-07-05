import { FETCH_DATATYPES_COMPLETE } from '../actions/datatypes';

const defaultState = {
	datatypes: [],
};

export default function (state = defaultState, action) {
	switch (action.type) {
		// case FETCH_SUITE_COMPLETE:
		// 	return action.suite;
		case FETCH_DATATYPES_COMPLETE:
			return action.datatypes;
		default:
			return state;
	}
}
