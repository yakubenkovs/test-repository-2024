const {browser} = require('@wdio/globals');
class Base {
    async navigate(url) {
        await browser.url(url);
    }

    async pressElement(webElement, timeout = 10000) {
        await webElement.waitForClickable({
            timeout,
            timeoutMsg: `Element ${webElement.locator} is not clickable after after ${timeout}`
        });
        await webElement.click();
    }

    get pageTitle() {
        return $('.theme-doc-markdown>:first-child>:first-child');
    }
}

module.exports = {Base};