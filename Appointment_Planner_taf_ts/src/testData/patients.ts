class Patient {
  public patientName!: string;
  public gender!: string;
  private _dateOfBirthday!: string;
  private _mobileNumber!: string;
  private _email!: string;
  public symptoms!: string;

  public get dateOfBirthday() {
    return this._dateOfBirthday;
  }

  public set dateOfBirthday(date: string) {
    this._dateOfBirthday = date;
  }

  public get mobileNumber() {
    return this._mobileNumber;
  }

  public set mobileNumber(mobileN: string) {
    this._mobileNumber = mobileN;
  }

  public get email() {
    return this._email;
  }

  public set email(emailN: string) {
    this._email = emailN;
  }
}

const patientDetails = new Patient();
patientDetails.patientName = 'Laura';
patientDetails.symptoms = 'Fever';

const patientsData = new Patient();
patientsData.patientName = 'Helen';
patientsData.gender = 'female';
patientsData.dateOfBirthday = '4/4/1995';
patientsData.mobileNumber = '7175550404';
patientsData.email = 'helen1995@gmail.com';
patientsData.symptoms = 'Backache';

export { patientsData, patientDetails };
