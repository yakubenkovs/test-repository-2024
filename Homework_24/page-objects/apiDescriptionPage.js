import { Base } from "./base";

class ApiDescriptionPage extends Base {
    constructor() {
        super();
    }
    
    get 'Page Title'() {
        return '.theme-doc-markdown>:first-child>:first-child';
    }
}

export {ApiDescriptionPage};