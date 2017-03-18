import { AppPage } from './app.po';

describe('QuickStart E2E Tests', function () {

  let expectedMsg = 'Hello i18n!';
  let p: AppPage;

  beforeEach(() => {
    p = new AppPage();
    p.navigate();
  });

  it('should display: ' + expectedMsg, function () {
    expect(p.getHeaderText()).toEqual(expectedMsg);
  });

});
