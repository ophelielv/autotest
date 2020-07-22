import axios from 'axios';

export const FETCH_ALLSUITESSHORT_COMPLETE = 'FETCH_ALLSUITESSHORT_COMPLETE';

export function fetchAllSuiteShort() {
	return function (dispatch) {
		axios
			.get('http://localhost:3000/suites/get-all-short')
			.then(function (response) {
				dispatch({
					type: FETCH_ALLSUITESSHORT_COMPLETE,
					suites: response.data,
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
