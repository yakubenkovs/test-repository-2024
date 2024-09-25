const {test, expect} = require("@playwright/test");
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
    const cartSubtotalTextAfterAdding = 'Subtotal (1 item):';
    const errorMessageToCompare = 'We cannot find an account with that email address';
    const newCurrencyValue = 'EUR';
    const newCountryValue = 'Italy';
    const problemTextToSearch = 'I Had A Problem With My Delivery';
    const targetUrl = 'https://www.amazon.com/';
    const testLoginName = 'testemail246246246@gmail.com';
    const textToSearch = 'gaming headset';

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
        await homePage.navigate(targetUrl);
        await header.pressElement(await header.accountListsLink);
        await loginPage.loginToSystem(testLoginName);
        await expect(await loginPage.errorMessage).toHaveText(errorMessageToCompare);
    });

    test('Should change currency to ' + newCurrencyValue + '', async ({page}) => {
        await homePage.navigate(targetUrl);
        await header.pressElement(await header.languageIcon);
        await customerPreferencesPage.changeSystemCurrency(newCurrencyValue);
        await header.searchByText(textToSearch);
        await expect(await searchResultPage.currencyOfFirstSuggestion).toContainText(newCurrencyValue);
    });

    test('Should change location to ' + newCountryValue + '', async ({page}) => {
        await homePage.navigate(targetUrl);
        await header.pressElement(await header.locationTextField);
        await locationPopUp.changeDeliveryCountry(newCountryValue);
        await expect(await header.locationTextField).toHaveText(newCountryValue);
    });

    test('Should search solution to problem in customer service', async ({page}) => {
        await homePage.navigate(targetUrl);
        await header.pressElement(await header.leftNavigationMenuToggle);
        await leftNavigationMenu.pressElement(await leftNavigationMenu.customerServiceLink);
        await customerServicePage.searchByText(problemTextToSearch);
        await expect(await customerServicePage.solutionTitle).toHaveText(problemTextToSearch);
    });

    test('Should add product to the cart', async ({page}) => {
        await homePage.navigate(targetUrl);
        await header.pressElement(await header.locationTextField);
        await locationPopUp.changeDeliveryCountry(newCountryValue);
        await header.searchByText(textToSearch);
        await searchResultPage.addProductToCart();
        await header.pressElement(await header.cartIcon);
        await expect(await cartPage.subtotalCountOfCart).toHaveText(cartSubtotalTextAfterAdding);
    });
});