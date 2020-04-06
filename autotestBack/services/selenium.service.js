const { Builder } = require('selenium-webdriver');

class SeleniumService {

  async build() {
    this.driver = await new Builder().forBrowser('chrome').build();
    return this.driver;
  }

  async quit() {
    return await this.driver.quit();
  }
}

module.exports = SeleniumService;