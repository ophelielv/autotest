export const MESSAGE_SUCCESS = 'MESSAGE_SUCCESS';
export const MESSAGE_WARNING = 'MESSAGE_WARNING';
export const MESSAGE_DANGER = 'MESSAGE_DANGER';
export const MESSAGE_INFO = 'MESSAGE_INFO';
export const DELETE_MESSAGE_BY_ID = 'DELETE_MESSAGE_BY_ID';

export function deleteMessageById(id) {
  return function (dispatch) {
    dispatch({
      type: DELETE_MESSAGE_BY_ID,
      id: id,
    });
  };
}
