const Page = require('./page');

/**
 * Home page selectors and methods
 */
class HomePage extends Page {
    /**
     * getter selectors for home page
     */
    get usernameField() {
        return $('#user-name');
    }

    get passwordField() {
        return $('#password');
    }

    get loginButton() {
        return $('#login-button');
    }
    /**
     * methods for encapsulation
     */
}

module.exports = new HomePage();
