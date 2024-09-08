const { Base } = require("./base");

class SearchPopUp extends Base {
    constructor() {
        super();
    }

    get inputField() {
        return $('#docsearch-input');
    }

    get firstElementAfterSearch() {
        return $('#docsearch-item-0>:first-child>:first-child');
    }

    async searchText(textValueToSearch) {
        await this.inputField.setValue(textValueToSearch);
        await this.pressElement(await this.firstElementAfterSearch);
    }
}

module.exports = {SearchPopUp};