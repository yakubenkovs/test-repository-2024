import {Base} from "../base";

class Header extends Base {
    constructor() {
        super();
    }

    get 'Search Field'() {
        return '.DocSearch-Button'
    }

    get 'Api Menu Element'() {
        return '.navbar__inner>:first-child>[href="/docs/api"]';
    }

    get 'Version Switcher'() {
        return '.navbar__items--right>:first-child';
    }
}

export {Header};