import { VrummPage } from './app.po';

describe('vrumm App', function() {
  let page: VrummPage;

  beforeEach(() => {
    page = new VrummPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
