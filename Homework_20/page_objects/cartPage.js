const {Base} = require('./base');

class CartPage extends Base {
  constructor(page) {
    super(page);
  }

  get subtotalCountOfCart() {
    return this.page.locator('#sc-subtotal-label-buybox');
  }
}

module.exports = CartPage;