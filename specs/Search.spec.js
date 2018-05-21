var LoginPage = require('../pageobjects/Search.page');

describe('search page', function () {
    it('should deny access with wrong creds', function () {
        LoginPage.open();
        LoginPage.searchInput.setValue('test');
        LoginPage.submit();

        expect(LoginPage.flash.getText()).to.contain('Your username is invalid!');
    });

});