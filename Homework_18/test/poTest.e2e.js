const {HomePage} = require ('../pageobjects/homePage');
const {SearchPopUp} = require ('../pageobjects/searchPopUp');
const {Header} = require ('../pageobjects/components/header');
const {SetTimeoutPage} = require('../pageobjects/setTimeoutPage');
const {LeftNavigationPanel} = require('../pageobjects/components/leftNavigationPanel');
const {ActionPage} = require('../pageobjects/actionPage');
const {VersionsPage} = require('../pageobjects/versionsPage')

const homePage = new HomePage();
const searchPopUp = new SearchPopUp();
const header = new Header();
const setTimeoutPage = new SetTimeoutPage();
const leftNavigationPanel = new LeftNavigationPanel();
const actionPage = new ActionPage();
const versionsPage = new VersionsPage();

const urlName = 'https://webdriver.io/';
const textToSeach = 'setTimeout';
const pageTitleToCheck = 'action';
const versionToCheck = 'v8';

describe('WDIO tests', () => {
    it('Should open setTimeout page after searching and showing results', async() => {
        await homePage.navigate(urlName);
        await header.pressElement(await header.searchField);
        await searchPopUp.searchText(textToSeach);
        expect(await setTimeoutPage.pageTitle.getText()).toEqual(textToSeach);
    })

    it('Should open Action page after locating it through menu', async() => {
        await homePage.navigate(urlName);
        await header.pressElement(await header.apiMenuElement);
        await leftNavigationPanel.pressElement(await leftNavigationPanel.browserSection);
        await leftNavigationPanel.pressElement(await leftNavigationPanel.actionPage);
        expect(await actionPage.pageTitle.getText()).toEqual(pageTitleToCheck);
    })

    it('Should change version of the documentation after switching version', async() => {
        await homePage.navigate(urlName);
        await header.pressElement(await header.versionSwitcher);
        await versionsPage.pressElement(await versionsPage.documentantionOfPreviousVersion);
        await browser.closeWindow();
        await browser.switchWindow(versionToCheck);
        expect(await header.versionSwitcher.getText()).toEqual(versionToCheck);
    })
});
