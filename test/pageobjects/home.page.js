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

    //Methods

    /**
     * Signs user into account via home page login form
     * @param {string} username username of account for login attempt
     * @param {string} password password of account for login attempt
     */
    login(username, password) {
        this.usernameField.addValue(username);
        this.passwordField.addValue(password);
        this.loginButton.click();
    }
}

module.exports = new HomePage();
