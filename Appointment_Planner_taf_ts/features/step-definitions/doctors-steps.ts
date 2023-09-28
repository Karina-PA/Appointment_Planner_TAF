import { When } from '@wdio/cucumber-framework';
import doctorsData from '../../src/testData/doctors';
import PageFactory from '../../src/pageObjects/pages/pageFactory';
const page = new PageFactory();

When('I fill Add new doctor form on {string} page', async (pageName: string) => {
  await page.getPage(pageName).fillAddDoctorForm(doctorsData.phone, doctorsData.email, doctorsData.education);
});

When("I click on new doctor's card on {string} page", async (pageName: string) => {
  await page.getPage(pageName).newDoctorCard.click();
});

When('I fill Add new doctor form on {string} page without entering mandatory data', async (pageName: string) => {
  await page.getPage(pageName).fillAddDoctorForm();
});
