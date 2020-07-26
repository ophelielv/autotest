import axios from 'axios';

export const FETCH_SUITE_COMPLETE = 'FETCH_SUITE_COMPLETE';
export const LAUNCH_SUITE_COMPLETE = 'LAUNCH_SUITE_COMPLETE';

export function fetchSuite(suite_id) {
	return function (dispatch) {
		return axios
			.get(`http://localhost:3000/suites/get/${suite_id}`)
			.then(function (response) {
				dispatch({
					type: FETCH_SUITE_COMPLETE,
					suite: response.data ? JSON.parse(response.data.suite) : null,
				});
			})
			.catch(function (error) {
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	};
}

export function launchSuite(code) {
	return function (dispatch) {
		return axios
			.get(`http://localhost:3000/suites/launch/${code}`)
			.then(function (response) {
				console.log(response.data);
				dispatch({
					type: LAUNCH_SUITE_COMPLETE,
					// suite: response.data ? JSON.parse(response.data.suite) : null,
				});
			})
			.catch(function (error) {
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	};
}
