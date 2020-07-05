export const FETCH_DATATYPES_COMPLETE = 'FETCH_DATATYPE_COMPLETE';

export function fetchAllDatatypes() {
	return function (dispatch) {
		// return fetch(window.config.apiUrl + '/suites/get-all')
		return fetch('http://localhost:3000/datatypes/get-all')
			.then(res => res.json())
			.then(data =>
				dispatch({
					type: FETCH_DATATYPES_COMPLETE,
					datatypes: data,
				})
			);
	};
}
