// Require the built in 'assertion' library
// or // const { expect } = require('chai'); ???
const assert = require('assert');
const ConnectionPage = require('../pages/connectionPage');
const SeleniumService = require('../services/selenium.service');

console.log("TEST1.SPEC.JS");

describe('Connection to google drive', async () => {
  let driver;

  // runs once before the first test in this block
  before(async () => {
    driver = await (new SeleniumService()).build();
  });

  // runs once after the last test in this block
  after(async () => {
    await driver.quit();
  });

  it('Page title should be "Drive"', async () => {
    const myConnectionPage = new ConnectionPage(driver);
    await myConnectionPage.connectToDrive();

    const title = await myConnectionPage.getTitle();
    assert.equal(title, "Drive");
  });
});