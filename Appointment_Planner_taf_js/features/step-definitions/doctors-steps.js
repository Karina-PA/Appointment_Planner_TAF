const { Given, When } = require('@wdio/cucumber-framework');
const { page } = require('../../src/pageObjects/pages/pageFactory');
const { doctorsData } = require('../../src/testData/doctors');

When('I fill Add new doctor form on {string} page', async pageName => {
  await page(pageName).fillAddDoctorForm(doctorsData.phone, doctorsData.email, doctorsData.education);
});

When("I click on new doctor's card on {string} page", async pageName => {
  await page(pageName).newDoctorCard.click();
});

When('I fill Add new doctor form on {string} page without entering mandatory data', async pageName => {
  await page(pageName).fillAddDoctorForm();
});
