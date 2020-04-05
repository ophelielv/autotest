const { Builder, By, Key, until } = require('selenium-webdriver');
const { URL_CONNECTION_TO_DRIVE } = require('../pages/Constants.URL');
const { USERNAME, USERPASS } = require('../pages/Constants.Users');

class ConnectionPage {

  constructor() {

  }

  async init() {
    this.driver = await new Builder().forBrowser('chrome').build();
  }

  async connect() {
    await this.init();
    try {
      await this.driver.get(URL_CONNECTION_TO_DRIVE);
      await this.driver.findElement(By.name('identifier')).sendKeys(USERNAME, Key.RETURN);
      await this.driver.sleep(3000);
      await this.driver.findElement(By.name('password')).sendKeys(USERPASS, Key.RETURN);
    } catch (error) {
      console.error(error);
    } finally {
      await this.driver.quit();
    }
  }
}

module.exports = ConnectionPage;
// await this.driver.wait(until.titleIs('webdriver - Google Search'), 1000);

