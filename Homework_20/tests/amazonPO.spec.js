const {test, expect} = require("@playwright/test");
const {TEXT_CONSTANTS} = require('../helpers/constants');
const Header = require("../page_objects/component/header");
const LeftNavigationMenu = require("../page_objects/component/leftNavigationMenu");
const LocationPopUp = require("../page_objects/component/locationPopUp");
const CartPage = require("../page_objects/cartPage");
const CustomerPreferencesPage = require("../page_objects/customerPreferencesPage");
const CustomerServicePage = require("../page_objects/customerServicePage");
const HomePage = require("../page_objects/homePage");
const LoginPage = require("../page_objects/loginPage");
const SearchResultPage = require("../page_objects/searchResultPage");

test.describe('Amazon tests', async function () {
    let header, leftNavigationMenu, locationPopUp, cartPage, customerPreferencesPage, customerServicePage, homePage, loginPage, searchResultPage;

    test.beforeEach(async ({page}) => {
        header = new Header(page);
        leftNavigationMenu = new LeftNavigationMenu(page);
        locationPopUp = new LocationPopUp(page);
        cartPage = new CartPage(page);
        customerPreferencesPage = new CustomerPreferencesPage(page);
        customerServicePage = new CustomerServicePage(page);
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        searchResultPage = new SearchResultPage(page);
    });

    test('Should be validation error if incorrect login', async ({page}) => {
        await homePage.navigate(TEXT_CONSTANTS.targetUrl);
        await header.pressElement(await header.accountListsLink);
        await loginPage.loginToSystem(TEXT_CONSTANTS.testLoginName);
        await expect(await loginPage.errorMessage).toHaveText(TEXT_CONSTANTS.errorMessageToCompare);
    });

    test('Should change currency to ' + TEXT_CONSTANTS.newCurrencyValue + '', async ({page}) => {
        await homePage.navigate(TEXT_CONSTANTS.targetUrl);
        await header.pressElement(await header.languageIcon);
        await customerPreferencesPage.changeSystemCurrency(TEXT_CONSTANTS.newCurrencyValue);
        await header.searchByText(TEXT_CONSTANTS.textToSearch);
        await expect(await searchResultPage.currencyOfFirstSuggestion).toContainText(TEXT_CONSTANTS.newCurrencyValue);
    });

    test('Should change location to ' + TEXT_CONSTANTS.newCountryValue + '', async ({page}) => {
        await homePage.navigate(TEXT_CONSTANTS.targetUrl);
        await header.pressElement(await header.locationTextField);
        await locationPopUp.changeDeliveryCountry(TEXT_CONSTANTS.newCountryValue);
        await expect(await header.locationTextField).toHaveText(TEXT_CONSTANTS.newCountryValue);
    });

    test('Should search solution to problem in customer service', async ({page}) => {
        await homePage.navigate(TEXT_CONSTANTS.targetUrl);
        await header.pressElement(await header.leftNavigationMenuToggle);
        await leftNavigationMenu.pressElement(await leftNavigationMenu.customerServiceLink);
        await customerServicePage.searchByText(TEXT_CONSTANTS.problemTextToSearch);
        await expect(await customerServicePage.solutionTitle).toHaveText(TEXT_CONSTANTS.problemTextToSearch);
    });

    test('Should add product to the cart', async ({page}) => {
        await homePage.navigate(TEXT_CONSTANTS.targetUrl);
        await header.pressElement(await header.locationTextField);
        await locationPopUp.changeDeliveryCountry(TEXT_CONSTANTS.newCountryValue);
        await header.searchByText(TEXT_CONSTANTS.textToSearch);
        await searchResultPage.addProductToCart();
        await header.pressElement(await header.cartIcon);
        await expect(await cartPage.subtotalCountOfCart).toHaveText(TEXT_CONSTANTS.cartSubtotalTextAfterAdding);
    });
});