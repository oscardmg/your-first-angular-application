import { MiProyectoPage } from './app.po';

describe('mi-proyecto App', () => {
  let page: MiProyectoPage;

  beforeEach(() => {
    page = new MiProyectoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
