import { Given, When } from '@wdio/cucumber-framework';
import PageFactory from '../../src/pageObjects/pages/pageFactory';
const page = new PageFactory();

Given('A web browser is at the Application home page', async () => {
  await page.getPage('basepage').goto();
});

When('I go to {string} page', async (pageName: string) => {
  await page.getPage(pageName).openTab(pageName);
});

When('I click {string} button on {string} page', async (btnName: string, pageName: string) => {
  await page.getPage(pageName).clickBtn(btnName);
});

When('I fill {string} field in modal window on {string} page', async (dataKey: string, pageName: string) => {
  await page.getPage(pageName).fillData(dataKey);
});

When('I choose {string} in modal window on {string} page', async (dataKey: string, pageName: string) => {
  await page.getPage(pageName).chooseData(dataKey);
});

When('I click {string} button in modal window on {string} page', async (btnName: string, pageName: string) => {
  await page.getPage(pageName).clickBtn(btnName);
});

When('I fill {string} field with {string} value on {string} page', async (field: string, value: string, pageName: string) => {
  await page.getPage(pageName).fillData(field, value);
});
