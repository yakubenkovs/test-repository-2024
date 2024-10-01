const Header = require('./header');

class LeftNavigationMenu extends Header {
  constructor() {
    super();
  }

  get customerServiceLink() {
    return cy.xpath('(//*[@class="hmenu-item" and contains(text(), "Customer Service")])[1]');
  }
}

module.exports = new LeftNavigationMenu();