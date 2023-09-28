@dashboard
Feature: Dashboard

    Scenario: It should be possible to open a modal window
        Given A web browser is at the Application home page
        Then Application page title should be equal to 'Appointment Planner - Syncfusion Angular Components Showcase App'
        When I go to 'Doctors' page
        And I click 'Add new doctor' button on 'Doctors' page
        Then Modal window 'Add new doctor' opens on 'Doctors' page
        Then 'Add new doctor' modal window on 'Doctors' page should have 'New Doctor' title

    Scenario: It should be possible to see notification about adding new doctor's card on dashboard page
        Given A web browser is at the Application home page
        Then Application page title should be equal to 'Appointment Planner - Syncfusion Angular Components Showcase App'
        When I go to 'Doctors' page
        And I click 'Add new doctor' button on 'Doctors' page
        Then Modal window 'Add new doctor' opens on 'Doctors' page

        When I fill Add new doctor form on 'Doctors' page
        And I click 'Save' button in modal window on 'Doctors' page
        And I go to 'Dashboard' page
        Then Added new doctor notification with given name should be displayed on 'Dashboard' page
