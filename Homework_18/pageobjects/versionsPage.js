const { Base } = require("./base");

class VersionsPage extends Base {
    constructor() {
        super();
    }

    get documentantionOfPreviousVersion() {
        return $('[href="https://v8.webdriver.io"]');
    }
}

module.exports = {VersionsPage};