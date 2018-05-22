// login.page.js
var Page = require('./Page');

var SearchPage = Object.create(Page, {
    /**
     * define elements
     */
    searchInput: { get: function () { return browser.element('#lst-ib'); } },
    searchButton: { get: function () { return browser.element('#sbtc > div.gstl_0.sbdd_a > div:nth-child(2) > div.sbdd_b > div > ul > li:nth-child(11) > div > span:nth-child(1) > span > input'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, '/');
    } },

    submit: { value: function() {
        this.form.submitForm();
    } }
});

module.exports = SearchPage;