const {Base} = require('./base');

class CustomerServicePage extends Base {
  constructor(page) {
    super(page);
  }

  get searchInputField() {
    return this.page.locator('#hubHelpSearchInput');
  }

  get solutionTitle() {
    return this.page.locator('.a-box-inner>:first-child');
  }

  async searchByText(problemTextToSearch) {
    await this.searchInputField.fill(problemTextToSearch);
    await this.searchInputField.press('Enter');
  }
}

module.exports = CustomerServicePage;