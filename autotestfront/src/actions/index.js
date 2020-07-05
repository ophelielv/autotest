// export const FETCH_SUITE_COMPLETE = 'FETCH_SUITE_COMPLETE';
// export const FETCH_ALLSUITESSHORT_COMPLETE = 'FETCH_ALLSUITESSHORT_COMPLETE';

// // export function fetchSuite () {
// //     return function(dispatch){
// //         return fetch('http://localhost:3000/suite')
// //         // return fetch(window.config.apiUrl + '/suite')
// //         .then(res => res.json())
// //         .then(data => dispatch({
// //             type: FETCH_SUITE_COMPLETE,
// //             suite: data
// //         }));
// //     }
// // }

// export function fetchAllSuiteShort() {
// 	return function (dispatch) {
// 		// return fetch(window.config.apiUrl + '/suites/get-all')
// 		return fetch('http://localhost:3000/suites/get-all-short')
// 			.then(res => res.json())
// 			.then(data =>
// 				dispatch({
// 					type: FETCH_ALLSUITESSHORT_COMPLETE,
// 					suites: data,
// 				})
// 			);
// 	};
// }
