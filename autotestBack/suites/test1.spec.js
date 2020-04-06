// Require the built in 'assertion' library
// or // const { expect } = require('chai'); ???
const assert = require('assert');
const ConnectionPage = require('../pages/connectionPage');
const SeleniumService = require('../services/selenium.service');

console.log("TEST1.SPEC.JS")


// Create a test suite (group) called Math
describe('Connection to google drive', async function () {

  const driver = await (new SeleniumService()).build();

  const myConnectionPage = new ConnectionPage(driver);
  await myConnectionPage.connectToDrive();

  const driveH1 = await myConnectionPage.getTitle();
  console.log(driveH1);

  it('should be "Drive"', function () {
    console.log("ITTTTTTT")
    assert.equal(driveH1, "Mon Drive");
  });

  await driver.quit();

});