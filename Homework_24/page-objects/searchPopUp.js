import { Base } from "./base";

class SearchPopUp extends Base {
    constructor() {
        super();
    }

    get 'Search Input'() {
        return '#docsearch-input';
    }

    get 'First Suggestion Line'() {
        return '#docsearch-item-0>:first-child>:first-child';
    }
}

export {SearchPopUp};