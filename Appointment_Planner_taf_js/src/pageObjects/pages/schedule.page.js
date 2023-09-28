const BasePage = require('./base.page');
const { patientDetails } = require('../../testData/patients');

class SchedulePage extends BasePage {
  cell = $('//tbody/tr[5]/td[2]');
  filledCell = $('[data-id="Appointment_1029"]');
  addAppointmentWindow = $('#_dialog_wrapper');
  saveBtn = $('.e-event-save');
  patientNameField = $('#PatientName');
  symptomsField = $('textarea#Symptoms');
  appointmentDetailsWindow = $('div.e-event-popup');
  nameDetails = $('div.patient-name-wrap > div > span');

  constructor() {
    super();
  }

  async chooseWindow(windowName) {
    if (windowName === 'Add Appointment') {
      return this.addAppointmentWindow;
    } else if (windowName === 'Appointment Details') {
      return this.appointmentDetailsWindow;
    }
  }

  async chooseBtn(btnName) {
    if (btnName === 'Save') {
      return this.saveBtn;
    }
  }

  async clickBtn(btnName) {
    if (btnName === 'Save') {
      await this.saveBtn.click();
    }
  }

  async fillData(dataKey) {
    if (dataKey === 'Patient Name') {
      await this.patientNameField.setValue(patientDetails.patientName);
    } else if (dataKey === 'Symptoms') {
      await this.symptomsField.setValue(patientDetails.symptoms);
    }
  }
}

module.exports = SchedulePage;
