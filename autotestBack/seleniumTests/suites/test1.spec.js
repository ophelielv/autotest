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

describe('Connection to google drive', () => {
	let driver, testParams;

	before(async () => {
		testParams = await getTestParamsFromDb();
	});

	beforeEach(async () => {
		driver = await new SeleniumService().build();
	});

	afterEach(async () => {
		await driver.quit();
	});

	it('Page title should be Drive', async () => {
		try {
			const myConnectionPage = new ConnectionPage(driver);
			await myConnectionPage.connectToDrive(
				extractFromTest(testParams, 1, 'Login'),
				extractFromTest(testParams, 1, 'Password')
			);

			const title = await myConnectionPage.getTitle();
			assert.equal(title, 'Drive');
		} catch (error) {
			console.log(error);
		}
	});
});
