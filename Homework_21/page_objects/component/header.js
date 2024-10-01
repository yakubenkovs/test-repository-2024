const {Base} = require('../base');

class Header extends Base {
  constructor() {
    super();
  }

  get homeLink() {
    return cy.get('#nav-logo-sprites');
  }

  get accountListsLink() {
    return cy.get('#nav-link-accountList');
  }

  get languageIcon() {
    return cy.get('#icp-nav-flyout');
  }

  get searchInputField() {
    return cy.get('#twotabsearchtextbox');
  }

  get searchSumbmitButton() {
    return cy.get('#nav-search-submit-button');
  }

  get locationTextField() {
    return cy.get('#glow-ingress-line2');
  }

  get leftNavigationMenuToggle() {
    return cy.get('#nav-hamburger-menu');
  }

  get cartIcon() {
    return cy.get('#nav-cart-count-container');
  }

  searchByText(textToSearch) {
    this.searchInputField.type(textToSearch);
    this.searchSumbmitButton.click();
  }
}

module.exports = Header;