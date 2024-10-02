import {Base} from "../base" ;

class LeftNavigationPanel extends Base {
    constructor() {
        super();
    }

    get 'Browser Section'() {
        return '.theme-doc-sidebar-menu [href="/docs/api/browser"]';
    }

    get 'Action Page'() {
        return '.theme-doc-sidebar-menu [href="/docs/api/browser/action"]';
    }
}

export {LeftNavigationPanel};