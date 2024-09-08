describe.skip('Onliner test', () => {
    it('should be error message if login and password are wrong', async() => {
        await browser.url('https://www.onliner.by/');
        const enterButton = await $('.auth-bar__item.auth-bar__item--text');
        await enterButton.click();
        const loginField = await $('[placeholder="Ник или e-mail"]')
        await loginField.setValue('Login Name');
        const passwordField = await $('[placeholder="Пароль"]')
        await passwordField.setValue('Password')
        const loginButton = await $('.auth-button_primary')
        await loginButton.click();
        const errorMessage = await $('.auth-form__description_error')
        await errorMessage.waitForDisplayed();
        expect(await errorMessage.getText()).to.equal('Неверный логин или пароль')
    })
});
