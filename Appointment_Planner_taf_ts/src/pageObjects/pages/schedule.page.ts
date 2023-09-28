import BasePage from './base.page';
import { patientDetails } from '../../testData/patients';

class SchedulePage extends BasePage {
  get cell() {
    return $('//tbody/tr[5]/td[2]');
  }
  get filledCell() {
    return $('[data-id="Appointment_1029"]');
  }
  get addAppointmentWindow() {
    return $('#_dialog_wrapper');
  }
  get saveBtn() {
    return $('.e-event-save');
  }
  get patientNameField() {
    return $('#PatientName');
  }
  get symptomsField() {
    return $('textarea#Symptoms');
  }
  get appointmentDetailsWindow() {
    return $('div.e-event-popup');
  }
  get nameDetails() {
    return $('div.patient-name-wrap > div > span');
  }

  constructor() {
    super();
  }

  async chooseWindow(windowName: string) {
    if (windowName === 'Add Appointment') {
      return this.addAppointmentWindow;
    } else if (windowName === 'Appointment Details') {
      return this.appointmentDetailsWindow;
    }
  }

  async chooseBtn(btnName: string) {
    if (btnName === 'Save') {
      return this.saveBtn;
    }
  }

  async clickBtn(btnName: string) {
    if (btnName === 'Save') {
      await this.saveBtn.click();
    }
  }

  async fillData(dataKey: string) {
    if (dataKey === 'Patient Name') {
      await this.patientNameField.setValue(patientDetails.patientName);
    } else if (dataKey === 'Symptoms') {
      await this.symptomsField.setValue(patientDetails.symptoms);
    }
  }
}

export default new SchedulePage();
