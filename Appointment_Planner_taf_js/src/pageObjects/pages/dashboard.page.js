const BasePage = require('./base.page');
// require('dotenv').config({ path: 'configs/.env' });

class DashboardPage extends BasePage {
  constructor() {
    super();
  }
  get doctorAddedNotification() {
    return $$('.activity-container.doctor .activity-message');
  }
}

module.exports = DashboardPage;
