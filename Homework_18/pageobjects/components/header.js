const {Base} = require("../base");

class Header extends Base {
    constructor() {
        super();
    }

    get searchField() {
        return $('.DocSearch-Button');
    }

    get apiMenuElement() {
        return $('.navbar__inner>:first-child>[href="/docs/api"]');
    }

    get versionSwitcher() {
        return $('.navbar__items--right>:first-child');
    }
}

module.exports = {Header};