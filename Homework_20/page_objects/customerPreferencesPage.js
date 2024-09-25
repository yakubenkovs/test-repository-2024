const {Base} = require('./base');

class CustomerPreferencesPage extends Base {
  constructor(page) {
    super(page);
  }

  get currencyDropdownList() {
    return this.page.locator('#icp-currency-dropdown-selected-item-prompt');
  }

  get saveChangesButton() {
    return this.page.locator('[aria-labelledby = "icp-save-button-announce"]');
  }

  async changeSystemCurrency(newCurrencyValue) {
    await this.pressElement(await this.currencyDropdownList);
    await this.pressElement(await this.page.locator('#' + newCurrencyValue));
    await this.pressElement(await this.saveChangesButton);
    await this.currencyDropdownList.waitFor({state: 'hidden'});
  }
}

module.exports = CustomerPreferencesPage;