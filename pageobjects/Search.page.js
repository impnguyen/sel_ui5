var Page = require ('./Page');

class SearchPage extends Page {

    get searchInput()  { return browser.element('#lst-ib'); }

    open() {
        super.open('login');
    }

    submit() {
        this.form.submitForm();
    }

}

module.export = new SearchPage();