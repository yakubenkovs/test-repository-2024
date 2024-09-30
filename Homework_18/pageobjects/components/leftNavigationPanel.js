const {Base} = require("../base");

class LeftNavigationPanel extends Base {
    constructor() {
        super();
    }

    get browserSection() {
        return $('.theme-doc-sidebar-menu [href="/docs/api/browser"]');
    }

    get actionPage() {
        return $('.theme-doc-sidebar-menu [href="/docs/api/browser/action"]');
    }
}

module.exports = {LeftNavigationPanel};