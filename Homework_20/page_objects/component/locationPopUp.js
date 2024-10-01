const Header = require('./header');

class LocationPopUp extends Header {
  constructor(page) {
    super(page);
  }

  get countryDropdownList() {
    return this.page.locator('#GLUXCountryList');
  }

  get doneButton() {
    return this.page.locator('.a-popover-footer .a-button-text');
  }

  async changeDeliveryCountry(newCountryValue) {
    await this.countryDropdownList.waitFor({state: 'visible'});
    await this.countryDropdownList.selectOption(newCountryValue);
    await this.pressElement(await this.doneButton);
    await this.countryDropdownList.waitFor({state: 'detached'});
  }
}

module.exports = LocationPopUp;