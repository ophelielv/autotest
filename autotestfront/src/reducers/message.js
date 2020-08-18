import { SAVE_TEST_COMPLETE, SAVE_TEST_ERROR } from '../actions/test';
import {
	MESSAGE_DANGER,
	MESSAGE_SUCCESS,
	DELETE_MESSAGE_BY_ID
} from '../actions/message';

const defaultState = [];

const setId = (state) => {
	const maxId = state.reduce((max, message) => {
		return message.id > max ? message.id : max
	}, 0);
	return maxId + 1;
}

export default function (state = defaultState, action) {
	switch (action.type) {
		case SAVE_TEST_COMPLETE:
			return [
				...state,
				{
					id: setId(state),
					type: MESSAGE_SUCCESS,
					message: action.message
				}];
		case SAVE_TEST_ERROR:
			return [
				...state,
				{
					id: setId(state),
					type: MESSAGE_DANGER,
					message: action.message
				}];
		case DELETE_MESSAGE_BY_ID:
			return state.filter(message => message.id !== action.id);
		default:
			return state;
	}
}
