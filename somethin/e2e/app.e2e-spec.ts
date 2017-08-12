import { SomethinPage } from './app.po';

describe('somethin App', () => {
  let page: SomethinPage;

  beforeEach(() => {
    page = new SomethinPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
