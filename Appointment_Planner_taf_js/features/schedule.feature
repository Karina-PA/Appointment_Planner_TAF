@schedule
Feature: Schedule page

    Scenario: It should be possible to add a patient to the calendar
        Given A web browser is at the Application home page
        When I go to "schedule" page
        Then Calendar cell should be clickable on "schedule" page
        When I click calendar cell on "schedule" page
        Then Modal window "Add Appointment" opens on "schedule" page
        And The "Save" button should be clickable in modal window on "schedule" page
        When I click "Save" button in modal window on "schedule" page
        Then "Enter valid Patient Name" message should be displayed in "Add Appointment" modal window on "schedule" page
        Then "Please enter disease Symptoms" message should be displayed in "Add Appointment" modal window on "schedule" page
        When I fill "Patient Name" field in modal window on "schedule" page
        And I fill "Symptoms" field in modal window on "schedule" page
        And I click "Save" button in modal window on "schedule" page
        And I click filled cell on "schedule" page
        Then Modal window "Appointment Details" opens on "schedule" page
        Then Patient name field should have valid data in modal window on "schedule" page
