import {
	DELETE_MESSAGE_BY_ID,
	ADD_MESSAGE
} from '../actions/message';

const defaultState = [];

const incrementId = (state) => {
	const maxId = state.reduce((max, message) => {
		return message.id > max ? message.id : max
	}, 0);
	return maxId + 1;
}

export default function (state = defaultState, action) {
	switch (action.type) {
		case ADD_MESSAGE:
			return [
				...state,
				{
					id: incrementId(state),
					message: action.message,
					messageType: action.messageType,
				}];
		case DELETE_MESSAGE_BY_ID:
			return state.filter(message => message.id !== action.id);
		default:
			return state;
	}
}
