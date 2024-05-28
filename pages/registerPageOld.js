import { Selector,t } from "testcafe";


class RegisterPage {
    constructor() {
        this.genderOption = Selector('#gender-male')
        this.firstName = Selector('#FirstName')
        this.lastName = Selector('#LastName')
        this.dateOfBirthDay = Selector('select[name="DateOfBirthDay"]') 
        this.dateOfBirthMonth = Selector('select[name="DateOfBirthMonth"]')
        this.dateOfBirthYear = Selector('select[name="DateOfBirthYear"]')
        this.email = Selector('#Email')
        this.company = Selector('#Company')
        this.password = Selector('#Password')
        this.confirmpassword= Selector('#ConfirmPassword')
        this.registerButton = Selector('#register-button')
        this.successMessage = Selector('div.result').withText('Your registration completed');
    }

    async selectDay(day) {

        const Dayoption = this.dateOfBirthDay.find('option');
        await t
            .click(this.dateOfBirthDay)
            .click(Dayoption.withText(day));

    }

    async selectMonth(month){
        const Monthoption = this.dateOfBirthMonth.find('option');
        await t
            .click(this.dateOfBirthMonth)
            .click(Monthoption.withText(month));
    }

    async selectYear(year){
        const Yearoption = this.dateOfBirthYear.find('option');

        await t
            .click(this.dateOfBirthYear)
            .click(Yearoption.withText(year));


    }

}
export default new RegisterPage();
