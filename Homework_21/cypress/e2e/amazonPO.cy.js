const Header = require("../../page_objects/component/header");
const header = new Header();
const leftNavigationMenu = require("../../page_objects/component/leftNavigationMenu");
const locationPopUp = require("../../page_objects/component/locationPopUp");
const customerPreferencesPage = require("../../page_objects/customerPreferencesPage");
const customerServicePage = require("../../page_objects/customerServicePage");
const homePage = require("../../page_objects/homePage");
const loginPage = require("../../page_objects/loginPage");
const searchResultPage = require("../../page_objects/searchResultPage");

describe('Amazon tests', async function () {
    const errorMessageToCompare = 'We cannot find an account with that email address';
    const newCurrencyValue = 'EUR';
    const newCountryValue = 'Italy';
    const problemTextToSearch = 'I Had A Problem With My Delivery';
    const targetUrl = 'https://www.amazon.com/';
    const testLoginName = 'testemail246246246@gmail.com';
    const textToSearch = 'gaming headset';

    it('Should be validation error if incorrect login', () => {
        homePage.navigate(targetUrl);
        header.accountListsLink.click();
        loginPage.loginToSystem(testLoginName);
        loginPage.errorMessage.should('contain', errorMessageToCompare);
    });

    it('Should change currency to ' + newCurrencyValue + '', () => {
        homePage.navigate(targetUrl);
        header.languageIcon.click();
        customerPreferencesPage.changeSystemCurrency(newCurrencyValue);
        header.searchByText(textToSearch);
        searchResultPage.currencyOfFirstSuggestion.should('contain', newCurrencyValue);
    });

    it('Should change location to ' + newCountryValue + '', () => {
        homePage.navigate(targetUrl);
        header.locationTextField.click();
        locationPopUp.changeDeliveryCountry(newCountryValue);
        header.locationTextField.should('contain', newCountryValue);
    });

    it('Should search solution to problem in customer service', () => {
        homePage.navigate(targetUrl);
        header.leftNavigationMenuToggle.click();
        leftNavigationMenu.customerServiceLink.click();
        customerServicePage.searchByText(problemTextToSearch);
        customerServicePage.solutionTitle.should('contain', problemTextToSearch);
    });
});
