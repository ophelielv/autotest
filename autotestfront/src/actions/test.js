import axios from 'axios';

export const SAVE_TEST_COMPLETE = 'SAVE_TEST_COMPLETE';
export const SAVE_TEST_ERROR = 'SAVE_TEST_ERROR';

export function saveTest({ testId, parameters }) {
  return function (dispatch) {
    return axios
      .post(`http://localhost:3000/tests/save/${testId}`, parameters)
      .then(function (response) {
        dispatch({
          type: SAVE_TEST_COMPLETE,
          suite: response.data ? JSON.parse(response.data.suite) : null,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}