import { Element, ElementArray } from 'webdriverio';

export default class BasePage {
  constructor() {}

  public goto() {
    return browser.url('');
  }

  public get dashboardTab() {
    return $('[routerlink="/dashboard"]');
  }

  public get doctorsTab() {
    return $('[routerlink="/doctors"]');
  }

  public get patientsTab() {
    return $('[routerlink="/patients"]');
  }

  public get scheduleTab() {
    return $('[routerlink="/calendar"]');
  }

  public async openTab(tabName: string): Promise<void> {
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

  public async getElementText(element: ElementArray) {
    const info = await element.map(item => item.getText());
    return info;
  }

  public async clickBtn(btnName: string): Promise<void> {}

  public async chooseWindow(windowName: string): Promise<Element> {}
}
