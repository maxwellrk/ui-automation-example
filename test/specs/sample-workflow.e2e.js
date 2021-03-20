const HomePage = require('../pageobjects/home.page');
const CartPage = require('../pageobjects/cart.page');
const CheckoutStep1Page = require('../pageobjects/checkout-step1.page');
const CheckoutStep2Page = require('../pageobjects/checkout-step2.page');
const InventoryPage = require('../pageobjects/inventory.page');

describe('Primary Workflow', () => {
    it('Cart Page - Adds correct items in cart', () => {
        HomePage.open();
        HomePage.login('standard_user', 'secret_sauce');
        InventoryPage.selectSortByDropdownByText('Price (low to high)');
        InventoryPage.addItemToCart('Sauce Labs Backpack');
        InventoryPage.addItemToCart('Sauce Labs Bike Light');
        InventoryPage.addItemToCart('Test.allTheThings() T-Shirt (Red)');
        InventoryPage.shoppingCartLink.click();
        expect(CartPage.findItemByItemName('Sauce Labs Backpack')).toExist();
        expect(CartPage.findItemByItemName('Sauce Labs Bike Light')).toExist();
        expect(
            CartPage.findItemByItemName('Test.allTheThings() T-Shirt (Red)')
        ).toExist();
    });

    it('Checkout Page - Adds correct items in checkout', () => {
        CartPage.removeItemFromCart('Sauce Labs Backpack');
        CartPage.continueShoppingButton.click();
        InventoryPage.addItemToCart('Sauce Labs Fleece Jacket');
        InventoryPage.shoppingCartLink.click();
        CartPage.checkoutButton.click();
        CheckoutStep1Page.continuePurchase('firstname', 'lastname', 01234);
        expect(
            CheckoutStep2Page.findItemByItemName('Sauce Labs Backpack')
        ).not.toExist();
        expect(
            CheckoutStep2Page.findItemByItemName('Sauce Labs Bike Light')
        ).toExist();
        expect(
            CheckoutStep2Page.findItemByItemName('Sauce Labs Fleece Jacket')
        ).toExist();
        expect(
            CheckoutStep2Page.findItemByItemName(
                'Test.allTheThings() T-Shirt (Red)'
            )
        ).toExist();
    });

    it('Checkout Page - Calculates the items total accurately', () => {
        //I'm making an assumption here for the assertion that the tax values are correct,
        //as the item total is correct, and the tax percentage is never specified
        expect(
            Number(CheckoutStep2Page.totalPrice.getText().split('$')[1])
        ).toEqual(82.05);
        CheckoutStep2Page.finishButton.click();
    });
});
