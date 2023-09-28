import BasePage from './base.page';

class DashboardPage extends BasePage {
  constructor() {
    super();
  }
  public get doctorAddedNotification() {
    return $$('.activity-container.doctor .activity-message');
  }
}

export default new DashboardPage();
