const { Base } = require("./base");

class ApiDescriptionPage extends Base {
    constructor() {
        super();
    }
    
    get pageTitle() {
        return $('.theme-doc-markdown>:first-child>:first-child');
    }
}

module.exports = {ApiDescriptionPage};