import { When } from '@wdio/cucumber-framework';
import PageFactory from '../../src/pageObjects/pages/pageFactory';
const page = new PageFactory();

When('I choose patient {string} on {string} page', async (patient: string, pageName: string) => {
  await page.getPage(pageName).openPatientCard(patient);
});
