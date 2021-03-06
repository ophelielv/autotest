const { Builder, By, Key, until } = require('selenium-webdriver');
const { URL_CONNECTION_TO_DRIVE } = require('../../constants/urls.constants');

class ConnectionPage {
	constructor(driver) {
		this.driver = driver;
	}

	// ************************************************************ //
	// ******************** Controls ****************************** //
	// ************************************************************ //
	async connectToDrive(login, password) {
		try {
			await this.driver.get(URL_CONNECTION_TO_DRIVE);
			await this.driver.sleep(2000);
			await this.driver
				.findElement(By.name('identifier'))
				.sendKeys(login, Key.RETURN);
			await this.driver.sleep(2000);
			await this.driver
				.findElement(By.name('password'))
				.sendKeys(password, Key.RETURN);
			await this.driver.sleep(2000);
		} catch (error) {
			console.error(error);
		}
	}

	// ************************************************************ //
	// ******************** Getters ******************************* //
	// ************************************************************ //
	async getTitle() {
		return await (
			await this.driver.findElement(
				By.xpath(
					'html/body/div[1]/div[2]/div[1]/div[1]/div/div/div[1]/header/div[2]/div[1]/div[4]/div/a/span'
				)
			)
		).getText();
	}

	// ************************************************************ //
	// ******************** Setters ******************************* //
	// ************************************************************ //
}

module.exports = ConnectionPage;
// await this.driver.wait(until.titleIs('webdriver - Google Search'), 1000);
