import { DocTestPage } from './app.po';

describe('doc-test App', function() {
  let page: DocTestPage;

  beforeEach(() => {
    page = new DocTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
