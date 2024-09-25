const {Base} = require('./base');

class SearchResultPage extends Base {
  constructor(page) {
    super(page);
  }

  get currencyOfFirstSuggestion() {
    return this.page.locator('[data-index = "2"] [data-cy="secondary-offer-recipe"] .a-color-base');
  }

  get addToCartButtonOfFirstSuggestion() {
    return this.page.locator('#a-autoid-1');
  }

  async addProductToCart() {
    await this.pressElement(await this.addToCartButtonOfFirstSuggestion);
    await this.addToCartButtonOfFirstSuggestion.waitFor({state: 'visible'});
  }
}

module.exports = SearchResultPage;