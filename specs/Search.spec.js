var expect = require('chai').expect;
var SearchPage = require('../pageobjects/Search.page');
var assert = require('assert');


describe('search page', function () {
    it('should show results with "test"', function () {
        SearchPage.open();
        browser.pause(1000);
        SearchPage.searchInput.setValue('test');
        browser.pause(1000);
        assert.equal(browser.getTitle(), 'Google');
        SearchPage.searchButton.click();
        browser.pause(1000);

        assert.equal(browser.getTitle(), 'test - Google-Suche');
    });

});