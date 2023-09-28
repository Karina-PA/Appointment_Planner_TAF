const DashboardPage = require('./dashboard.page');
const DoctorsPage = require('./doctors.page');
const PatientsPage = require('./patients.page');
const BasePage = require('./base.page');
const SchedulePage = require('./schedule.page');

function page(name) {
  const items = {
    basepage: new BasePage(),
    dashboard: new DashboardPage(),
    doctors: new DoctorsPage(),
    patients: new PatientsPage(),
    schedule: new SchedulePage(),
  };
  return items[name.toLowerCase()];
}

module.exports = {
  DashboardPage,
  DoctorsPage,
  PatientsPage,
  page,
};
