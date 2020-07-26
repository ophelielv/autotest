console.log('TEST1.SPEC.JS');
// Require the built in 'assertion' library
// or // const { expect } = require('chai'); ???
const assert = require('assert');
const ConnectionPage = require('../pages/connectionPage');
const SeleniumService = require('../../services/selenium.service');

const database = require('../../db/repositories/database');
const suiteRepository = require('../../db/repositories/suite.repository');

const getTestParams = async () => {
	try {
		const result = await suiteRepository.getByColumn(
			database,
			'code',
			'ST1',
			false
		);
		const suite = JSON.parse(result.suite);
		// console.log(' --- ', suite, ' **** ');
		// suite.tests.map(test => console.log(test.parameters));

		if (result.error) {
			console.log(result.error);
			return;
		}
		return suite.tests;
	} catch (err) {
		console.log(err);
	}
};

const getParam = (tests, testNumber, name) => {
	console.log(' iiiiiiii ', tests, tests.length, testNumber);
	if (0 < tests.length && tests.length <= testNumber) {
		console.log(' uusssssssssssss ');
		const test = tests[testNumber - 1];
		console.log(test);
		const param = test ? test[name] : null;
		console.log(param);
		return param ? param.value : null;
	}
	return null;
};

describe('Connection to google drive', async () => {
	let driver;
	const testParams = await getTestParams();

	getParam(testParams, 1, 'Login');
	// getParam(testParams, 1, 'Password')
	return;
	// runs once before the first test in this block
	beforeEach(async () => {
		driver = await new SeleniumService().build();
	});

	// runs once after the last test in this block
	afterEach(async () => {
		await driver.quit();
	});

	it('Page title should be "Drive"', async () => {
		try {
			const myConnectionPage = new ConnectionPage(driver);
			await myConnectionPage.connectToDrive(
				getParam(testParams, 1, 'Login'),
				getParam(testParams, 1, 'Password')
			);

			const title = await myConnectionPage.getTitle();
			assert.equal(title, 'Drive');
		} catch (error) {
			console.log(error);
		}
	});
});
