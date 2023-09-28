class BasePage {
  constructor() {}

  goto() {
    return browser.url('');
  }

  get dashboardTab() {
    return $('[routerlink="/dashboard"]');
  }

  get doctorsTab() {
    return $('[routerlink="/doctors"]');
  }

  get patientsTab() {
    return $('[routerlink="/patients"]');
  }

  get scheduleTab() {
    return $('[routerlink="/calendar"]');
  }

  async openTab(tabName) {
    switch (tabName.toLowerCase()) {
      case 'dashboard':
        await this.dashboardTab.waitForClickable();
        await this.dashboardTab.click();
        break;
      case 'doctors':
        await this.doctorsTab.waitForClickable();
        await this.doctorsTab.click();
        break;
      case 'patients':
        await this.patientsTab.waitForClickable();
        await this.patientsTab.click();
        break;
      case 'schedule':
        await this.scheduleTab.waitForClickable();
        await this.scheduleTab.click();
        break;
    }
  }

  async clickBtn() {}

  async chooseWindow() {}

  async getElementText(element) {
    const info = await element.map(item => item.getText());
    return info;
  }
}

module.exports = BasePage;
