const { Given, When } = require('@wdio/cucumber-framework');
const { page } = require('../../src/pageObjects/pages/pageFactory');

When('I choose patient {string} on {string} page', async (patient, pageName) => {
  await page(pageName).openPatientCard(patient);
});
