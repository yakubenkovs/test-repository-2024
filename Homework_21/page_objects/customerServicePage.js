const {Base} = require('./base');

class CustomerServicePage extends Base {
  constructor() {
    super();
  }

  get searchInputField() {
    return cy.get('#hubHelpSearchInput');
  }

  get solutionTitle() {
    return cy.get('.a-box-inner>:first-child');
  }

  searchByText(problemTextToSearch) {
    this.searchInputField.type(problemTextToSearch);
    this.searchInputField.type('{enter}');
  }
}

module.exports = new CustomerServicePage();