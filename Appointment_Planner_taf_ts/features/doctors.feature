@doctors
Feature: Doctors

    Scenario: it should be possible to add new specialist
        Given A web browser is at the Application home page
        When I go to 'Doctors' page
        And I click 'Add new doctor' button on 'Doctors' page
        Then Modal window 'Add new doctor' opens on 'Doctors' page
        When I fill Add new doctor form on 'Doctors' page
        And I click 'Save' button in modal window on 'Doctors' page
        And I click on new doctor's card on 'Doctors' page
        Then 'Doctor Details' modal window on 'Doctors' page should contain valid name

    Scenario: it should be possible to delete new added specialist
        Given A web browser is at the Application home page
        When I go to 'Doctors' page
        And I click 'Add new doctor' button on 'Doctors' page
        And I fill Add new doctor form on 'Doctors' page
        And I click 'Save' button in modal window on 'Doctors' page
        And I click on new doctor's card on 'Doctors' page
        And I click 'Delete' button in modal window on 'Doctors' page
        Then Modal window 'Confirm delete' opens on 'Doctors' page
        When I click 'Ok' button in modal window on 'Doctors' page
        And I click 'Back' button in modal window on 'Doctors' page
        Then New specialist's card should not be displayed on 'Doctors' page

    Scenario: Error messages should be displayed in case of clicking save button without filling mandatory fields in Add new doctor form
        Given A web browser is at the Application home page
        When I go to 'Doctors' page
        And I click 'Add new doctor' button on 'Doctors' page
        And I fill Add new doctor form on 'Doctors' page without entering mandatory data
        And I click 'Save' button in modal window on 'Doctors' page
        Then "Enter valid mobile number" message should be displayed in 'Add new doctor' modal window on 'Doctors' page
        Then "Enter valid email" message should be displayed in 'Add new doctor' modal window on 'Doctors' page
        Then "Enter valid education" message should be displayed in 'Add new doctor' modal window on 'Doctors' page
