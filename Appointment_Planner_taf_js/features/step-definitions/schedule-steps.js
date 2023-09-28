const { Given, When } = require('@wdio/cucumber-framework');
const { page } = require('../../src/pageObjects/pages/pageFactory');

When('I click calendar cell on {string} page', async pageName => {
  await page(pageName).cell.doubleClick();
});

When('I click filled cell on {string} page', async pageName => {
  await page(pageName).filledCell.click();
});
