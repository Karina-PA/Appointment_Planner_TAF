import { When } from '@wdio/cucumber-framework';
import PageFactory from '../../src/pageObjects/pages/pageFactory';
const page = new PageFactory();

When('I click calendar cell on {string} page', async (pageName: string) => {
  await page.getPage(pageName).cell.doubleClick();
});

When('I click filled cell on {string} page', async (pageName: string) => {
  await page.getPage(pageName).filledCell.click();
});
