import { TestingRoutingPage } from './app.po';

describe('testing-routing App', () => {
  let page: TestingRoutingPage;

  beforeEach(() => {
    page = new TestingRoutingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
