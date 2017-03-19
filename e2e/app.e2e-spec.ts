import { AppPage } from './app.po';

describe('Translate E2E Tests', function () {

  let expectedMsg:string = 'Hello i18n!';
  let p: AppPage;

  beforeEach(() => {
    p = new AppPage();
    p.navigate();
  });

  it('should display: ' + expectedMsg, function () {
    expect(p.getHeaderText()).toEqual(expectedMsg);
  });

});
