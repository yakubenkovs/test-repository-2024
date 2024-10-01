const Header = require('./header');

class LocationPopUp extends Header {
  constructor() {
    super();
  }

  get countryDropdownList() {
    return cy.get('#GLUXCountryList');
  }

  get doneButton() {
    return cy.get('.a-popover-footer .a-button-text');
  }

  changeDeliveryCountry(newCountryValue) {
    this.countryDropdownList.select(newCountryValue, {force: true});
    this.doneButton.click();
  }
}

module.exports = new LocationPopUp();