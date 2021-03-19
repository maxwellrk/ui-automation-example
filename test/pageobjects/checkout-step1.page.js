const Page = require('./page');

/**
 * Checkout Step 1 selectors and methods
 */
class CheckoutStep1Page extends Page {
    /**
     * getter selectors for checkout step-1 page
     */
    get firstNameField() {
        return $('#first-name');
    }

    get lastNameField() {
        return $('#password');
    }

    get continueButton() {
        return $('input[value="CONTINUE"]');
    }

    //Methods

    /**
     * Attempts to enter first and last name of user,
     * and continue to checkout step two page
     * @param {string} firstname first name of user
     * @param {string} lastname last name of user
     */
    continuePurchase(firstName, lastName) {
        this.firstNameField.addValue(firstName);
        this.lastNameField.addValue(lastName);
        this.continueButton.click();
    }
}

module.exports = new CheckoutStep1Page();
