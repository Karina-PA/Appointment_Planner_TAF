import DashboardPage from './dashboard.page';
import DoctorsPage from './doctors.page';
import PatientsPage from './patients.page';
import BasePage from './base.page';
import SchedulePage from './schedule.page';

class PageFactory {
  private readonly pages = {
    basepage: new BasePage(),
    dashboard: DashboardPage,
    doctors: DoctorsPage,
    patients: PatientsPage,
    schedule: SchedulePage,
  };
  public getPage(name: string) {
    const pageName = name.toLowerCase();
    const page = this.pages[pageName];
    return page;
  }
}

export default PageFactory;
