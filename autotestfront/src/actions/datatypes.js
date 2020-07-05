import axios from 'axios';

export const FETCH_DATATYPES_COMPLETE = 'FETCH_DATATYPE_COMPLETE';

export function fetchAllDatatypes() {
	return function (dispatch) {
		// return fetch(window.config.apiUrl + '/suites/get-all')
		return axios
			.get('http://localhost:3000/datatypes/get-all')
			.then(response =>
				dispatch({
					type: FETCH_DATATYPES_COMPLETE,
					datatypes: response.data,
				})
			)
			.catch(function (error) {
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	};
}
