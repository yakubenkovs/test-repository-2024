const {Base} = require('./base');

class LoginPage extends Base {
  constructor() {
    super();
  }

  get loginField() {
    return cy.get('#ap_email');
  }

  get continueButton() {
    return cy.get('.a-button-input');
  };

  get errorMessage() {
    return cy.get('#auth-error-message-box .a-list-item');
  }

  loginToSystem(loginName) {
    this.loginField.type(loginName);
    this.continueButton.click();
  }
}

module.exports = new LoginPage();