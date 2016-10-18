import { EnvVersionsFrontendPage } from './app.po';

describe('env-versions-frontend App', function() {
  let page: EnvVersionsFrontendPage;

  beforeEach(() => {
    page = new EnvVersionsFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
