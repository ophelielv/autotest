import { SAVE_TEST_COMPLETE, SAVE_TEST_ERROR } from '../actions/test';

export const MESSAGE_SUCCESS = 'MESSAGE_SUCCESS';
export const MESSAGE_WARNING = 'MESSAGE_WARNING';
export const MESSAGE_DANGER = 'MESSAGE_DANGER';
export const MESSAGE_INFO = 'MESSAGE_INFO';

const defaultState = [];

export default function (state = defaultState, action) {
	console.log("ACTION", action, "STATE", state)
	switch (action.type) {
		case SAVE_TEST_COMPLETE:
			return [
				...state,
				{
					type: MESSAGE_SUCCESS,
					message: action.message
				}];
		case SAVE_TEST_ERROR:
			return [
				...state,
				{
					type: MESSAGE_DANGER,
					message: action.message
				}];
		default:
			return state;
	}
}
