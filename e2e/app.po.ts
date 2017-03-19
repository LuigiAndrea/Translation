import { browser, element, by } from 'protractor';

export class AppPage {
  navigate() {
    browser.ignoreSynchronization = true;
    browser.get('/');
    browser.ignoreSynchronization = false;
  }

  getHeaderText() {
    return element(by.css('h1')).getText();
  }
}