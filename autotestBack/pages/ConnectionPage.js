const { Builder, By, Key, until } = require('selenium-webdriver');

// const URL_CONNECTION_TO_DRIVE = require('../pages/Constants.URL');
// npm install -g chromedriver --save
class ConnectionPage {

  constructor() {

  }

  async init() {
    this.driver = await new Builder().forBrowser('chrome').build();
  }

  async connect() {
    await this.init();
    try {
      await this.driver.get('http://www.google.com/ncr');
      await this.driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
      await this.driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } finally {
      await this.driver.quit();
    }
  }
}

module.exports = ConnectionPage;

