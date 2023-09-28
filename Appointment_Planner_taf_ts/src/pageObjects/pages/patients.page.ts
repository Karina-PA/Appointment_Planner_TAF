import BasePage from './base.page';
import { patientsData } from '../../testData/patients';

class PatientsPage extends BasePage {
  get titleValue() {
    return $('[class="title"]');
  }
  get addNewPatientBtn() {
    return $('.add-details');
  }
  get patientsList(): any {
    return $$('//span[@class="patient-name"]');
  }
  get deletedPatient() {
    return this.patientsList[0];
  }
  // Search
  get searchField() {
    return $('#schedule_searchbar');
  }
  get searchResMessage() {
    return $('.e-emptyrow td');
  }
  get searchResName() {
    return $('span.patient-name');
  }
  get searchResGen() {
    return $$('[aria-label*="Gender"]');
  }
  // "Patient details" modal window
  get deleteBtn() {
    return $('#delete');
  }
  get patientDetailsWindow() {
    return $('#grid_1627125836_0_dialogEdit_wrapper');
  }
  get cautionWindow() {
    return $('.break-hour-dialog');
  }
  get okBtn() {
    return $('.break-hour-dialog .e-primary');
  }
  // "New patient" modal window
  get newPatientWindow() {
    return $('.e-dialog.new-patient-dialog');
  }
  get saveBtn() {
    return $('.new-patient-dialog .e-primary');
  }
  get patientNameField() {
    return $('#textbox_0');
  }
  get femaleGender() {
    return $('//*[@for="doctorCheckFemale"]');
  }
  get dateOfBirthdayField() {
    return $('#DOB_input');
  }
  get mobileNumberField() {
    return $('#PatientMobile');
  }
  get emailField() {
    return $('#textbox_43');
  }
  get symptomsField() {
    return $('#textbox_44');
  }

  constructor() {
    super();
  }

  async getArrPatientsList() {
    let arr = await this.patientsList.map((el: any) => el.getText());
    return arr;
  }

  async openPatientCard(patient: string) {
    let arr: string[] = await this.getArrPatientsList();
    let indexCard: number = arr.indexOf(patient);
    await this.patientsList[indexCard].click();
  }

  async clickBtn(btnName: string) {
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

  async chooseBtn(btnName: string) {
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

  async chooseWindow(windowName: string) {
    if (windowName === 'New Patient') {
      return this.newPatientWindow;
    } else if (windowName === 'Patient Details') {
      return this.patientDetailsWindow;
    } else if (windowName === 'caution') {
      return this.cautionWindow;
    }
  }

  async fillData(dataKey: string, text: string) {
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

  async chooseData(dataKey: string) {
    if (dataKey === 'Gender' && patientsData.gender === 'female') {
      await this.femaleGender.waitForClickable();
      await this.femaleGender.click();
    } else if (dataKey === 'Female') {
      return await this.searchResGen;
    } else if (dataKey === 'Laura') {
      return await this.searchResName;
    }
  }

  async findPatient(value: string) {
    let arr: string[] = await this.getArrPatientsList();
    let patient = await arr.find((el: string) => el === value);
    return patient;
  }
}

export default new PatientsPage();
