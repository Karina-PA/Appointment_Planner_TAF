const BasePage = require('./base.page');
const { doctorsData } = require('../../testData/doctors');

class DoctorsPage extends BasePage {
  constructor() {
    super();
  }

  get closeBtn() {
    return $('.button-container button.e-btn:not(.e-primary)');
  }

  get saveBtn() {
    return $('.button-container button.e-primary');
  }

  get addNewDoctorButton() {
    return $('button.e-control');
  }

  get addNewDoctorForm() {
    return $('.new-doctor-dialog');
  }

  get addNewDoctorFormTitle() {
    return $('#_title');
  }

  get deleteNewDoctorCard() {
    return $("//button[contains(text(), 'Delete')]");
  }

  get confirmDeleteCardButton() {
    return $("//button[contains(text(), 'Ok')]");
  }
  get confirmDeleteCardModal() {
    return $("ejs-dialog[header='Doctor Details']");
  }

  get goBackToPreviousPage() {
    return $('.back-icon.icon-previous');
  }

  get nameInput() {
    return $('#Name input');
  }

  get phoneInput() {
    return $('input#DoctorMobile');
  }

  get emailInput() {
    return $("input[name='Email']");
  }

  get educationInput() {
    return $("input[name='Education']");
  }

  get designationInput() {
    return $("input[name='Designation']");
  }

  get doctorsCheckMale() {
    return $('#patientCheckMale');
  }

  get doctorsCheckFemale() {
    return $('#patientCheckFemale');
  }

  get generalMedOption() {
    return $("//input[@aria-label='General Medicine']");
  }

  get specializationOption() {
    return $("//div[@aria-owns='Specialization_options']");
  }

  get experienceOption() {
    return $("//div[@aria-owns='Experience_options']");
  }

  get experienceFiveY() {
    return $("//input[@aria-label='5+ years']");
  }

  get newDoctorCard() {
    return $('#Specialist_8');
  }

  get newDoctorInfo() {
    return $('.doctor-details-container .active-doctor-info');
  }

  get doctorList() {
    return $$('div.specialist-detail');
  }

  get enterMobileMsg() {
    return $('#undefined-info');
  }

  get enterEmailMsg() {
    return $('#Email-info');
  }

  get enterEducationMsg() {
    return $('#Education-info');
  }

  async clickBtn(btnName) {
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

  async chooseWindow(windowName) {
    if (windowName.toLocaleLowerCase() === 'add new doctor') {
      return this.addNewDoctorForm;
    } else if (windowName.toLocaleLowerCase() === 'doctor details') {
      return this.newDoctorInfo;
    } else if (windowName.toLocaleLowerCase() === 'confirm delete') {
      return this.confirmDeleteCardModal;
    }
  }

  async fillAddDoctorForm(phone, email, education) {
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

module.exports = DoctorsPage;
