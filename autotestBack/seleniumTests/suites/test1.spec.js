console.log('TEST1.SPEC.JS');
// Require the built in 'assertion' library
// or // const { expect } = require('chai'); ???
const assert = require('assert');
const ConnectionPage = require('../pages/connectionPage');
const SeleniumService = require('../../services/selenium.service');
const {
	extractFromTest,
	getTestParamsFromDb,
} = require('../../services/getTestParams.service');

console.log(1);

describe('Connection to google drive', () => {
	let driver, testParams;

	before(async () => {
		testParams = await getTestParamsFromDb();
		console.log(2, extractFromTest(testParams, 1, 'Login'));
	});

	beforeEach(async () => {
		console.log(3);
		driver = await new SeleniumService().build();
	});

	afterEach(async () => {
		console.log(4);
		await driver.quit();
	});

	it('Page title should be "Drive"', async () => {
		console.log(5);
		try {
			console.log(6);
			const myConnectionPage = new ConnectionPage(driver);
			await myConnectionPage.connectToDrive(
				extractFromTest(testParams, 1, 'Login'),
				extractFromTest(testParams, 1, 'Password')
			);

			console.log(7);
			const title = await myConnectionPage.getTitle();
			assert.equal(title, 'Drive');
		} catch (error) {
			console.log(error);
		}
	});
});
