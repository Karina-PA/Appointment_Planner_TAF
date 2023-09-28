import { Then } from '@wdio/cucumber-framework';
import doctorsData from '../../src/testData/doctors';
import { expect as expectChai } from 'chai';
import { patientsData, patientDetails } from '../../src/testData/patients';
import PageFactory from '../../src/pageObjects/pages/pageFactory';
const page = new PageFactory();

Then('Application page title should be equal to {string}', async (title: string) => {
  await expect(browser).toHaveTitleContaining(title);
});
Then('Added new doctor notification with given name should be displayed on {string} page', async (pageName: string) => {
  expect(await page.getPage(pageName).getElementText(page.getPage(pageName).doctorAddedNotification)).toHaveTextContaining(
    doctorsData.name,
  );
});

Then('{string} modal window on {string} page should contain valid name', async (window: string, pageName: string) => {
  expect(await page.getPage(pageName).chooseWindow(window)).toHaveTextContaining(doctorsData.name);
});

Then('Page title should be {string} on {string} page', async (title, pageName) => {
  await expect(page.getPage(pageName).titleValue).toHaveText(title);
});

Then('New patient should be in patients list on {string} page', async (pageName: string) => {
  let newPatient = await page.getPage(pageName).findPatient(patientsData.patientName);
  expectChai(newPatient).to.equal(patientsData.patientName);
});

Then('The {string} button should be clickable in modal window on {string} page', async (btnName: string, pageName: string) => {
  expect(await page.getPage(pageName).chooseBtn(btnName)).toBeClickable();
});

Then('Modal window {string} opens on {string} page', async (windowName: string, pageName: string) => {
  expect(await page.getPage(pageName).chooseWindow(windowName)).toBeDisplayed();
});

Then('{string} modal window on {string} page should have {string} title', async (window: string, pageName: string, titleValue: string) => {
  await expect(page.getPage(pageName).chooseWindow(window)).toHaveTextContaining(titleValue);
});

Then('Deleted patient {string} should not be in patients list on {string} page', async (patient: string, pageName: string) => {
  expectChai(await page.getPage(pageName).findPatient(patient)).not.to.equal(patient);
});

Then('Search field should be enabled on {string} page', async (pageName: string) => {
  await expect(page.getPage(pageName).searchField).toBeEnabled();
});

Then('{string} message should be displayed in patients list on {string} page', async (message: string, pageName: string) => {
  await expect(page.getPage(pageName).searchResMessage).toHaveText(message);
});

Then('In patient list on {string} page should be patients with {string} value only', async (pageName: string, value: string) => {
  await expect(page.getPage(pageName).chooseData(value)).toHaveText(value);
});

Then('Calendar cell should be clickable on {string} page', async (pageName: string) => {
  await expect(page.getPage(pageName).cell).toBeClickable();
});

Then('Patient name field should have valid data in modal window on {string} page', async (pageName: string) => {
  expectChai(await page.getPage(pageName).nameDetails.getText()).to.equal(patientDetails.patientName);
});

Then("New specialist's card should not be displayed on {string} page", async (pageName: string) => {
  expectChai(await page.getPage(pageName).getElementText(page.getPage(pageName).doctorList)).not.to.contain(doctorsData.name);
});

Then(
  '{string} message should be displayed in {string} modal window on {string} page',
  async (message: string, window: string, pageName: string) => {
    await expect(page.getPage(pageName).chooseWindow(window)).toHaveTextContaining(message);
  },
);
