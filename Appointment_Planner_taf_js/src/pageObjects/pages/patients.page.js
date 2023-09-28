const BasePage = require('./base.page');
const { patientsData } = require('../../testData/patients');

class PatientsPage extends BasePage {
  titleValue = $('[class="title"]');
  addNewPatientBtn = $('.add-details');
  patientsList = $$('//span[@class="patient-name"]');
  deletedPatient = this.patientsList[0];
  // Search
  searchField = $('#schedule_searchbar');
  searchResMessage = $('.e-emptyrow td');
  searchResName = $('span.patient-name');
  searchResGen = $$('[aria-label*="Gender"]');
  // "Patient details" modal window
  deleteBtn = $('#delete');
  patientDetailsWindow = $('#grid_1627125836_0_dialogEdit_wrapper');
  cautionWindow = $('.break-hour-dialog');
  okBtn = $('.break-hour-dialog .e-primary');
  // "New patient" modal window
  newPatientWindow = $('.e-dialog.new-patient-dialog');
  saveBtn = $('.new-patient-dialog .e-primary');
  patientNameField = $('#textbox_0');
  femaleGender = $('//*[@for="doctorCheckFemale"]');
  dateOfBirthdayField = $('#DOB_input');
  mobileNumberField = $('#PatientMobile');
  emailField = $('#textbox_43');
  symptomsField = $('#textbox_44');

  constructor() {
    super();
  }

  async getArrPatientsList() {
    let arr = await this.patientsList.map(el => {
      return el.getText();
    });
    return arr;
  }

  async openPatientCard(patien) {
    let arr = await this.getArrPatientsList();
    let indexCard = arr.indexOf(patien);
    let patientCard = await this.patientsList[indexCard].click();
    return patientCard;
  }

  async clickBtn(btnName) {
    if (btnName === 'Add new patient') {
      await this.addNewPatientBtn.waitForClickable();
      await this.addNewPatientBtn.click();
    } else if (btnName === 'Save') {
      await this.saveBtn.waitForClickable();
      await this.saveBtn.click();
    } else if (btnName === 'Delete') {
      await this.deleteBtn.waitForClickable();
      await this.deleteBtn.click();
    } else if (btnName === 'Ok') {
      await this.okBtn.waitForClickable();
      await this.okBtn.click();
    }
  }

  async chooseBtn(btnName) {
    if (btnName === 'Save') {
      await this.saveBtn.waitForClickable();
      return this.saveBtn;
    } else if (btnName === 'Delete') {
      await this.deleteBtn.waitForClickable();
      return this.deleteBtn;
    } else if (btnName === 'Ok') {
      await this.okBtn.waitForClickable();
      return this.okBtn;
    }
  }

  async chooseWindow(windowName) {
    if (windowName === 'New Patient') {
      return this.newPatientWindow;
    } else if (windowName === 'Patient Details') {
      return this.patientDetailsWindow;
    } else if (windowName === 'caution') {
      return this.cautionWindow;
    }
  }

  async fillData(dataKey, text) {
    if (dataKey === 'Patient Name') {
      await this.patientNameField.setValue(patientsData.patientName);
    } else if (dataKey === 'DOB') {
      await this.dateOfBirthdayField.setValue(patientsData.dateOfBirthday);
    } else if (dataKey === 'Mobile Number') {
      await this.mobileNumberField.setValue(patientsData.mobileNumber);
    } else if (dataKey === 'Email') {
      await this.emailField.setValue(patientsData.email);
    } else if (dataKey === 'Symptoms') {
      await this.symptomsField.setValue(patientsData.symptoms);
    } else if (dataKey === 'Search') {
      await this.searchField.setValue(text);
    }
  }

  async chooseData(dataKey) {
    if (dataKey === 'Gender' && patientsData.gender === 'female') {
      await this.femaleGender.waitForClickable();
      await this.femaleGender.click();
    } else if (dataKey === 'Female') {
      return await this.searchResGen;
    } else if (dataKey === 'Laura') {
      return await this.searchResName;
    }
  }

  async findPatient(value) {
    let arr = await this.getArrPatientsList();
    let patient = await arr.find(el => el === value);
    return patient;
  }
}

module.exports = PatientsPage;
