const database = require('../db/repositories/database');
const suiteRepository = require('../db/repositories/suite.repository');

const getTestParamsFromDb = async () => {
	try {
		const result = await suiteRepository.getByColumn(
			database,
			'code',
			'ST1',
			false
		);
		const suite = JSON.parse(result.suite);

		if (result.error) {
			console.log(result.error);
			return;
		}
		return suite.tests;
	} catch (err) {
		console.log(err);
	}
};

const extractFromTest = (tests, testNumber, name) => {
	if (tests.length === 0 || tests.length < testNumber) return;

	const test = tests[testNumber - 1];
	if (test.parameters.length === 0) return;

	const filteredParams = test.parameters.filter(x => x.name === name);
	const param = filteredParams.length === 1 ? filteredParams[0] : null;
	return param ? param.value : null;
};

const saveHistory = () => {
	// TODO
};

/**
 * Change object :
 * {
 *    login: 'gilbert.davros@gmail.com',
 *    password: 'qwerty123',
 * }
 * 
 * into :
 * [{
 *   html_name: 'login',
 *   value: 'gilbert.davros@gmail.com'
 * },{
 *   html_name: 'passwonl',
 *   value: 'qwerty123'
 * }]
 */
function paramsToArray(object) {
	const params = [];
	for (const propertyName in object) {
		params.push({
			html_name: propertyName,
			value: object[propertyName]
		});
	}

	return params;
}

module.exports = {
	getTestParamsFromDb,
	extractFromTest,
	paramsToArray
};
