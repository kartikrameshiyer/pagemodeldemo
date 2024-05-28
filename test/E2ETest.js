import { ClientFunction } from "testcafe";
import HomePage from "../pages/homepage";
import RegisterPage from "../pages/registerPage";

import CustomerPage from "../pages/customerpage";
import math from "math";
import SearchResultsPage from "../pages/SearchResultsPage";
import ProdcutDetailsPage from "../pages/ProdcutDetailsPage";   
import CheckoutPage from "../pages/CheckoutPage";
import cartPage from "../pages/cartPage";
//import Myorderpage from "../pages/Myorderpage";

const URL = "https://demo.nopcommerce.com/";
const getURL = ClientFunction(() => window.location.href);
var randomNumber = math.floor(Math.random() * 10000);
var userEmail = "kartik" + randomNumber + "@example.com";

fixture `E2E test Fixture`
    .page(URL);

test('Assert Home page Test', async t => {
    await t
        .expect(getURL()).eql(URL)
        .takeScreenshot()
        .expect(HomePage.subtitleheader.exists).ok();

});

test('Place Order E2E Test', async t => {

    await t
        .maximizeWindow()
        .click(HomePage.registerLink)
        .expect(getURL()).contains('register')
        .takeScreenshot()
        .click(RegisterPage.genderOption)
        .typeText(RegisterPage.firstName, 'kartik')
        .typeText(RegisterPage.lastName, 'Ramesh')
        .typeText(RegisterPage.email, userEmail)
        .typeText(RegisterPage.password, 'password123')
        .typeText(RegisterPage.confirmpassword, 'password123');
        await RegisterPage.selectDay('5');
        await RegisterPage.selectMonth('May');
        await RegisterPage.selectYear('1988');
        await t
            .click(RegisterPage.registerButton)
            .expect(RegisterPage.successMessage.exists).ok()
            .takeScreenshot();
        await HomePage.searchProduct('Apple MacBook Pro 13-inch');
        await t
            //.click(HomePage.addToCartBtnOnHmPg)
            .click(SearchResultsPage.productTitle)
            .expect(getURL()).contains('apple-macbook-pro-13-inch')
            .click(HomePage.macbookLink)
            .debug()
            .wait(3000)
            .selectText(ProdcutDetailsPage.productQuantity).pressKey('delete')
            .typeText(ProdcutDetailsPage.productQuantity, '3')
            .click(ProdcutDetailsPage.addToCartBtn)
            .expect(ProdcutDetailsPage.sucessMessage.exists).ok()
            .wait(3000)
            .click(HomePage.CartLink)
            .click(cartPage.termsLabel)
            .click(CustomerPage.checkoutBtn)
            .expect(getURL()).contains('checkout');

            await CheckoutPage.selectCountry('usa' );
            await t
                .typeText(CheckoutPage.cityTxt, 'lillington')
                .typeText(CheckoutPage.addressTxt, '244 Exectuive Center')
                .typeText(CheckoutPage.zipTxt, '27654')
                .typeText(CheckoutPage.phoneTxt, '1234567890')
                .click(CheckoutPage.continueBtn)
                .click(CheckoutPage.nextDayOption)
                .click(CheckoutPage.nextShippingBtn)
                .click(CheckoutPage.nextPaymentBtn)
                .click(CheckoutPage.nextConfirmBtn)
                .click(CheckoutPage.confirmOrderBtn)
                .expect(CheckoutPage.orderConfirmationMessage.exists).ok()
                .click(CheckoutPage.viewOrderDetailsLink)
                .click(HomePage.myAccountLink)
                .debug();
                //.click(Myorderpage.orderslink);

});

test("chnage currency test", async t => {
    await t
        .click(HomePage.currecyList)
        .click(Selector('option').withText('Euro'))
        .expect(HomePage.currecyList.value).eql('EUR');
});