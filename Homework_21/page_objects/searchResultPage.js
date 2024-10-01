const {Base} = require('./base');

class SearchResultPage extends Base {
  constructor() {
    super();
  }

  get currencyOfFirstSuggestion() {
    return cy.get('[data-index = "4"] [data-cy="secondary-offer-recipe"] .a-color-base');
  }

  get addToCartButtonOfFirstSuggestion() {
    return cy.get('#a-autoid-1');
  }

  addProductToCart() {
    this.addToCartButtonOfFirstSuggestion.click();
  }
}

module.exports = new SearchResultPage();