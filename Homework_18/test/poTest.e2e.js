const {HomePage} = require ('../pageobjects/homePage');
const {SearchPopUp} = require ('../pageobjects/searchPopUp');
const {Header} = require ('../pageobjects/components/header');
const {LeftNavigationPanel} = require('../pageobjects/components/leftNavigationPanel');
const {VersionsPage} = require('../pageobjects/versionsPage')
const {ApiDescriptionPage} = require('../pageobjects/apiDescriptionPage')

const homePage = new HomePage();
const searchPopUp = new SearchPopUp();
const header = new Header();
const leftNavigationPanel = new LeftNavigationPanel();
const versionsPage = new VersionsPage();
const apiDescriptionPage = new ApiDescriptionPage();

const urlName = 'https://webdriver.io/';
const textToSeach = 'setTimeout';
const pageTitleToCheck = 'action';
const versionToCheck = 'v8';

describe('WDIO tests', () => {
    it('Should open setTimeout page after searching and showing results', async() => {
        await homePage.navigate(urlName);
        await header.pressElement(await header.searchField);
        await searchPopUp.searchByText(textToSeach);
        expect(await apiDescriptionPage.pageTitle.getText()).toEqual(textToSeach);
    })

    it('Should open Action page after locating it through menu', async() => {
        await homePage.navigate(urlName);
        await header.pressElement(await header.apiMenuElement);
        await leftNavigationPanel.pressElement(await leftNavigationPanel.browserSection);
        await leftNavigationPanel.pressElement(await leftNavigationPanel.actionPage);
        expect(await apiDescriptionPage.pageTitle.getText()).toEqual(pageTitleToCheck);
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
