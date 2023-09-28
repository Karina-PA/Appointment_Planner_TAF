import BasePage from './base.page';
import doctorsData from '../../testData/doctors';
import { Element, ElementArray } from 'webdriverio';

class DoctorsPage extends BasePage {
  constructor() {
    super();
  }

  public get closeBtn() {
    return $('.button-container button.e-btn:not(.e-primary)');
  }

  public get saveBtn() {
    return $('.button-container button.e-primary');
  }

  public get addNewDoctorButton() {
    return $('button.e-control');
  }

  public get addNewDoctorForm() {
    return $('.new-doctor-dialog');
  }

  public get addNewDoctorFormTitle() {
    return $('#_title');
  }

  public get deleteNewDoctorCard() {
    return $("//button[contains(text(), 'Delete')]");
  }

  public get confirmDeleteCardButton() {
    return $("//button[contains(text(), 'Ok')]");
  }
  public get confirmDeleteCardModal() {
    return $("ejs-dialog[header='Doctor Details']");
  }

  public get goBackToPreviousPage() {
    return $('.back-icon.icon-previous');
  }

  public get nameInput() {
    return $('#Name input');
  }

  public get phoneInput() {
    return $('input#DoctorMobile');
  }

  public get emailInput() {
    return $("input[name='Email']");
  }

  public get educationInput() {
    return $("input[name='Education']");
  }

  public get designationInput() {
    return $("input[name='Designation']");
  }

  public get doctorsCheckMale() {
    return $('#patientCheckMale');
  }

  public get doctorsCheckFemale() {
    return $('#patientCheckFemale');
  }

  public get generalMedOption() {
    return $("//input[@aria-label='General Medicine']");
  }

  public get specializationOption() {
    return $("//div[@aria-owns='Specialization_options']");
  }

  public get experienceOption() {
    return $("//div[@aria-owns='Experience_options']");
  }

  public get experienceFiveY() {
    return $("//input[@aria-label='5+ years']");
  }

  public get newDoctorCard() {
    return $('#Specialist_8');
  }

  public get newDoctorInfo() {
    return $('.doctor-details-container .active-doctor-info');
  }

  public get doctorList() {
    return $$('div.specialist-detail');
  }

  public get enterMobileMsg() {
    return $('#undefined-info');
  }

  public get enterEmailMsg() {
    return $('#Email-info');
  }

  public get enterEducationMsg() {
    return $('#Education-info');
  }

  public async clickBtn(btnName: string): Promise<void> {
    if (btnName.toLocaleLowerCase() === 'save') {
      await this.saveBtn.click();
    } else if (btnName.toLocaleLowerCase() === 'add new doctor') {
      await this.addNewDoctorButton.click();
    } else if (btnName.toLocaleLowerCase() === 'delete') {
      await this.deleteNewDoctorCard.click();
    } else if (btnName.toLocaleLowerCase() === 'ok') {
      await this.confirmDeleteCardButton.waitForClickable();
      await this.confirmDeleteCardButton.click();
    } else if (btnName.toLocaleLowerCase() === 'back') {
      await this.goBackToPreviousPage.click();
    } else {
      await this.closeBtn.click();
    }
  }

  public async chooseWindow(windowName: string): Promise<Element> {
    switch (windowName.toLocaleLowerCase()) {
      case 'add new doctor':
        return this.addNewDoctorForm;
      case 'doctor details':
        return this.newDoctorInfo;
      case 'confirm delete':
        return this.confirmDeleteCardModal;
      default:
        return undefined;
    }
  }

  public async fillAddDoctorForm(phone?: string, email?: string, education?: string): Promise<void> {
    await this.nameInput.waitForClickable();
    await this.nameInput.setValue(doctorsData.name);
    if (phone) {
      await this.phoneInput.waitForClickable();
      await this.phoneInput.setValue(doctorsData.phone);
    }
    if (email) {
      await this.emailInput.waitForClickable();
      await this.emailInput.setValue(doctorsData.email);
    }
    if (education) {
      await this.educationInput.waitForClickable();
      await this.educationInput.setValue(doctorsData.education);
    }
    await this.designationInput.waitForClickable();
    await this.designationInput.setValue(doctorsData.designation);
    await this.specializationOption.waitForClickable();
    await this.specializationOption.click();
  }
}

export default new DoctorsPage();
