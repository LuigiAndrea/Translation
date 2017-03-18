import { browser, element, by } from 'protractor';

export class AppPage {
  navigate() {
    browser.get('/');
  }

  getHeaderText() {
    return element(by.css('h1')).getText();
  }
}