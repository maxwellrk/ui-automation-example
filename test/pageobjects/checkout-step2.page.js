const Page = require('./page');

/**
 * Checkout page selectors and methods
 */

class CheckoutStep2Page extends Page {
    /**
     * getter selectors for checkout page
     */

    //total price
    get totalPrice() {
        return $('.summary_total_label');
    }
    //finish button
    get finishButton() {
        return $('a.btn_action.cart_button');
    }

    //Methods
    /**
     * Finds and returns an element object based on it's child div.inventory_item_name
     * @param {string} itemName Text value of div.inventory_item_name to find
     * will likely abstract this function into a new super class

     */
    findItemByItemName(itemName) {
        return $(`div=${itemName}`);
    }
}

module.exports = new CheckoutStep2Page();
