import axios from 'axios';

import { MESSAGE_DANGER, MESSAGE_SUCCESS, ADD_MESSAGE } from './message';
export const SAVE_TEST_COMPLETE = 'SAVE_TEST_COMPLETE';
export const SAVE_TEST_ERROR = 'SAVE_TEST_ERROR';

export function saveTest({ testId, parameters }) {
  return function (dispatch) {
    return axios
      .post(`http://localhost:3000/tests/save/${testId}`, parameters)
      .then(function (response) {
        dispatch({
          type: SAVE_TEST_COMPLETE,
        });
        dispatch({
          type: ADD_MESSAGE,
          message: response.data ? response.data.success : '',
          messageType: MESSAGE_SUCCESS
        });
      })
      .catch(function (err) {
        dispatch({
          type: SAVE_TEST_ERROR,
          message: err.data ? err.data.error : '',
        });
        dispatch({
          type: ADD_MESSAGE,
          message: err.data ? err.data.error : '',
          messageType: MESSAGE_DANGER
        });
        console.log(err);
      });
  };
}