@patients
Feature: Patients page

Background:
        Given A web browser is at the Application home page

    Scenario: Patients page should have "PATIENT LIST" title
        When I go to "patients" page
        Then Page title should be "PATIENT LIST" on "patients" page

    Scenario: Add new patient
        When I go to "patients" page
        And I click "Add new patient" button on "patients" page
        Then Modal window "New Patient" opens on "patients" page
        And The "Save" button should be clickable in modal window on "patients" page
        When I click "Save" button in modal window on "patients" page
        Then "Enter valid name" message should be displayed in "New Patient" modal window on "patients" page
        And "Enter valid mobile number" message should be displayed in "New Patient" modal window on "patients" page
        And "Enter valid email" message should be displayed in "New Patient" modal window on "patients" page
        When I fill "Patient Name" field in modal window on "patients" page
        And I choose "Gender" in modal window on "patients" page
        And I fill "DOB" field in modal window on "patients" page
        And I fill "Mobile Number" field in modal window on "patients" page
        And I fill "Email" field in modal window on "patients" page
        And I fill "Symptoms" field in modal window on "patients" page
        And I click "Save" button in modal window on "patients" page
        Then New patient should be in patients list on "patients" page

    Scenario: Delete patient from patients list
        When I go to "patients" page
        And I choose patient "Laura" on "patients" page
        Then Modal window "Patient Details" opens on "patients" page
        And "Patient Details" modal window on "patients" page should have "Patient Details" title
        And The "Delete" button should be clickable in modal window on "patients" page
        When I click "Delete" button in modal window on "patients" page
        Then Modal window "caution" opens on "patients" page
        And The "Ok" button should be clickable in modal window on "patients" page
        When I click "Ok" button in modal window on "patients" page
        Then Deleted patient "Laura" should not be in patients list on "patients" page

    Scenario: It should be possible to search by name, by gender
        When I go to "patients" page
        Then Search field should be enabled on "patients" page
        When I fill "Search" field with "Paul" value on "patients" page
        Then "No records to display" message should be displayed in patients list on "patients" page
        When I fill "Search" field with "Laura" value on "patients" page
        Then In patient list on "patients" page should be patients with "Laura" value only
        When I fill "Search" field with "Female" value on "patients" page
        Then In patient list on "patients" page should be patients with "Female" value only
