export const MESSAGE_SUCCESS = 'MESSAGE_SUCCESS';
export const MESSAGE_WARNING = 'MESSAGE_WARNING';
export const MESSAGE_DANGER = 'MESSAGE_DANGER';
export const MESSAGE_INFO = 'MESSAGE_INFO';
export const DELETE_MESSAGE_BY_ID = 'DELETE_MESSAGE_BY_ID';
export const ADD_MESSAGE = 'ADD_MESSAGE';

export function deleteMessageById(id) {
  return function (dispatch) {
    dispatch({
      type: DELETE_MESSAGE_BY_ID,
      id: id,
    });
  };
}


export function addMessage(message, messageType) {
  return function (dispatch) {
    dispatch({
      type: ADD_MESSAGE,
      message: {
        content: message,
        type: messageType
      }
    });
  };
}
