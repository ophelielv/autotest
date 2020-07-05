export const FETCH_SUITE_COMPLETE = 'FETCH_SUITE_COMPLETE';
export const FETCH_ALLSUITES_COMPLETE = 'FETCH_ALLSUITES_COMPLETE';

// export function fetchSuite () {
//     return function(dispatch){
//         return fetch('http://localhost:3000/suite')
//         // return fetch(window.config.apiUrl + '/suite')
//         .then(res => res.json())
//         .then(data => dispatch({
//             type: FETCH_SUITE_COMPLETE,
//             suite: data
//         }));
//     }
// }

export function fetchAllSuites () {
    return function(dispatch){
        // return fetch(window.config.apiUrl + '/suites/get-all')
        return fetch('http://localhost:3000/suites/get-all')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_ALLSUITES_COMPLETE,
            suites: data
        }));
    }
}
