const {Base} = require('../base');

class Header extends Base {
  constructor(page) {
    super(page);
  }

  get homeLink() {
    return this.page.locator('#nav-logo-sprites');
  }

  get accountListsLink() {
    return this.page.locator('#nav-link-accountList');
  }

  get languageIcon() {
    return this.page.locator('#icp-nav-flyout');
  }

  get searchInputField() {
    return this.page.locator('#twotabsearchtextbox');
  }

  get searchSumbmitButton() {
    return this.page.locator('#nav-search-submit-button');
  }

  get locationTextField() {
    return this.page.locator('#glow-ingress-line2');
  }

  get leftNavigationMenuToggle() {
    return this.page.locator('#nav-hamburger-menu');
  }

  get cartIcon() {
    return this.page.locator('#nav-cart-count-container');
  }

  async searchByText(textToSearch) {
    await this.searchInputField.fill(textToSearch);
    await this.pressElement(this.searchSumbmitButton);
  }
}

module.exports = Header;