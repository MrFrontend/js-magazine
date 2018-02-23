import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getAppHeaderTitle() {
    return element(by.css('.header--title')).getText();
  }
}
