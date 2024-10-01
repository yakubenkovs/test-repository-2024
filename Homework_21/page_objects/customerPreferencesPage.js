const {Base} = require('./base');

class CustomerPreferencesPage extends Base {
  constructor() {
    super();
  }

  get currencyDropdownList() {
    return cy.get('#icp-currency-dropdown-selected-item-prompt');
  }

  get saveChangesButton() {
    return cy.get('[aria-labelledby = "icp-save-button-announce"]');
  }

  changeSystemCurrency(newCurrencyValue) {
    this.currencyDropdownList.click();
    cy.get('#' + newCurrencyValue).click();
    this.saveChangesButton.click();
    this.currencyDropdownList.should('not.exist');
  }
}

module.exports = new CustomerPreferencesPage();