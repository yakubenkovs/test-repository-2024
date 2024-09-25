const Header = require('./header');

class LeftNavigationMenu extends Header {
  constructor(page) {
    super(page);
  }

  get customerServiceLink() {
    return this.page.locator('(//*[@class="hmenu-item" and contains(text(), "Customer Service")])[1]');
  }
}

module.exports = LeftNavigationMenu;