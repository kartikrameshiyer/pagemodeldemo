Feature: Registration Feature

        As a Vistor I can create a new account by the registration. 


Scenario: Registration
    Given I open the registration page
    When I select the gender
    And I enter the first name "kartik"
    And I enter the last name "ramesh"
    And I select the date of birth "04"
    And I select month of birth "November"
    And I select year of birth "1987"
    And I enter the email "karthik13423@example.com"
    And I enter the password "password123"
    And I enter the confirm password "password123"
    And I click on the register button
    Then I should see the success message "You have successfully registered"