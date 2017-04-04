import { RegencyBodiceRipperPage } from './app.po';

describe('regency-bodice-ripper App', () => {
  let page: RegencyBodiceRipperPage;

  beforeEach(() => {
    page = new RegencyBodiceRipperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
