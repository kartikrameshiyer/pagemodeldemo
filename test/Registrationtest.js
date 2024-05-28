import { ClientFunction } from "testcafe";
import HomePage from "../pages/homepage";
import RegisterPage from "../pages/registerPage";
import LoginPage from "../pages/loginPage";
import CustomerPage from "../pages/customerpage";
import math from "math";
import homepage from "../pages/homepage";

const URL = "https://demo.nopcommerce.com/";
const getURL = ClientFunction(() => window.location.href);
var randomNumber = math.floor(Math.random() * 10000);
var userEmail = "kartik" + randomNumber + "@example.com";

fixture("Registration Fixture")
    .page(URL);

test('Assert Home page Test', async t => {
    await t
        .expect(getURL()).eql(URL)
        .takeScreenshot()
        .expect(HomePage.subtitleheader.exists).ok();

}
);

test('User Registration Test', async t => {

    await t
        .click(HomePage.registerLink)
        .expect(getURL()).contains('register')
        .takeScreenshot()
        .click(RegisterPage.genderOption)
        .typeText(RegisterPage.firstName, 'kartik')
        .typeText(RegisterPage.lastName, 'Ramesh')
        .typeText(RegisterPage.email, userEmail)
        .typeText(RegisterPage.password, 'password123')
        .typeText(RegisterPage.confirmpassword, 'password123')
        await RegisterPage.selectDay('5');
        await RegisterPage.selectMonth('May');
        await RegisterPage.selectYear('1988');
        await t
            .click(RegisterPage.registerButton)
            .expect(RegisterPage.successMessage.exists).ok()
            .takeScreenshot();
        await t
            .click(HomePage.logoutLink)
            .click(HomePage.logIn)
            .expect(LoginPage.accountHeader.exists).ok()
            .typeText(LoginPage.emailInput, userEmail)
            .typeText(LoginPage.passwordInput, 'password123')
            .click(LoginPage.submitButton)
            .wait(3000)
            .click(HomePage.accountLink)
            .expect(CustomerPage.orderslink.exists).ok()
            .click(CustomerPage.orderslink)
            .expect(CustomerPage.noorderslabel.exists).ok()
            .takeScreenshot();  
}
);