const { Then } = require('@wdio/cucumber-framework');
const { page } = require('../../src/pageObjects/pages/pageFactory');
const { doctorsData } = require('../../src/testData/doctors');
const { fieldTitles } = require('../../src/testData/fieldTitles');
const expectChai = require('chai').expect;
const { patientsData, patientDetails } = require('../../src/testData/patients');

Then('Application page title should be equal to {string}', async title => {
  await expect(browser).toHaveTitleContaining(title);
});
Then('Added new doctor notification with given name should be displayed on {string} page', async pageName => {
  expect(await page(pageName).getElementText(page(pageName).doctorAddedNotification)).toHaveTextContaining(doctorsData.name);
});

Then('{string} modal window on {string} page should contain valid name', async (window, pageName) => {
  expect(await page(pageName).chooseWindow(window)).toHaveTextContaining(doctorsData.name);
});

Then('Page title should be {string} on {string} page', async (title, pageName) => {
  await expect(page(pageName).titleValue).toHaveText(title);
});

Then('New patient should be in patients list on {string} page', async pageName => {
  let newPatient = await page(pageName).findPatient(patientsData.patientName);
  expectChai(newPatient).to.equal(patientsData.patientName);
});

Then('The {string} button should be clickable in modal window on {string} page', async (btnName, pageName) => {
  expect(await page(pageName).chooseBtn(btnName)).toBeClickable();
});

Then('Modal window {string} opens on {string} page', async (windowName, pageName) => {
  expect(await page(pageName).chooseWindow(windowName)).toBeDisplayed();
});

Then('{string} modal window on {string} page should have {string} title', async (window, pageName, titleValue) => {
  await expect(page(pageName).chooseWindow(window)).toHaveTextContaining(titleValue);
});

Then('Deleted patient {string} should not be in patients list on {string} page', async (patient, pageName) => {
  expectChai(await page(pageName).findPatient(patient)).not.to.equal(patient);
});

Then('Search field should be enabled on {string} page', async pageName => {
  await expect(page(pageName).searchField).toBeEnabled();
});

Then('{string} message should be displayed in patients list on {string} page', async (message, pageName) => {
  await expect(page(pageName).searchResMessage).toHaveText(message);
});

Then('In patient list on {string} page should be patients with {string} value only', async (pageName, value) => {
  await expect(page(pageName).chooseData(value)).toHaveText(value);
});

Then('Calendar cell should be clickable on {string} page', async pageName => {
  await expect(page(pageName).cell).toBeClickable();
});

Then('Patient name field should have valid data in modal window on {string} page', async pageName => {
  expectChai(await page(pageName).nameDetails.getText()).to.equal(patientDetails.patientName);
});

Then("New specialist's card should not be displayed on {string} page", async pageName => {
  expectChai(await page(pageName).getElementText(page(pageName).doctorList)).not.to.contain(doctorsData.name);
});

Then('{string} message should be displayed in {string} modal window on {string} page', async (message, window, pageName) => {
  await expect(page(pageName).chooseWindow(window)).toHaveTextContaining(message);
});
