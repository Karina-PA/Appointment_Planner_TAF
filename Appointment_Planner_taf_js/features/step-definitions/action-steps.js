const { Given, When } = require('@wdio/cucumber-framework');
const { page } = require('../../src/pageObjects/pages/pageFactory');
const { doctorsData } = require('../../src/testData/doctors');

Given('A web browser is at the Application home page', async () => {
  await page('basepage').goto();
});

When('I go to {string} page', async pageName => {
  await page(pageName).openTab(pageName);
});

When('I click {string} button on {string} page', async (btnName, pageName) => {
  await page(pageName).clickBtn(btnName);
});

When('I fill {string} field in modal window on {string} page', async (dataKey, pageName) => {
  await page(pageName).fillData(dataKey);
});

When('I choose {string} in modal window on {string} page', async (dataKey, pageName) => {
  await page(pageName).chooseData(dataKey);
});

When('I click {string} button in modal window on {string} page', async (btnName, pageName) => {
  await page(pageName).clickBtn(btnName);
});

When('I fill {string} field with {string} value on {string} page', async (field, value, pageName) => {
  await page(pageName).fillData(field, value);
});
