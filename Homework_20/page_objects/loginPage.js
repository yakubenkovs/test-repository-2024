const {Base} = require('./base');

class LoginPage extends Base {
  constructor(page) {
    super(page);
  }

  get loginField() {
    return this.page.locator('#ap_email');
  }

  get continueButton() {
    return this.page.locator('.a-button-input');
  };

  get errorMessage() {
    return this.page.locator('#auth-error-message-box .a-list-item');
  }

  async loginToSystem(loginName) {
    await this.loginField.fill(loginName);
    await this.pressElement(this.continueButton);
  }
}

module.exports = LoginPage;