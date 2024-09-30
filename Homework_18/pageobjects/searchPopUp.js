const { Base } = require("./base");

class SearchPopUp extends Base {
    constructor() {
        super();
    }

    get inputField() {
        return $('#docsearch-input');
    }

    get firstSuggestionLine() {
        return $('#docsearch-item-0>:first-child>:first-child');
    }

    async searchByText(textValueToSearch) {
        await this.inputField.setValue(textValueToSearch);
        await this.pressElement(await this.firstSuggestionLine);
    }
}

module.exports = {SearchPopUp};