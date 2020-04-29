import { newE2EPage } from '@stencil/core/testing';

describe('aui-paper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<aui-paper></aui-paper>');

    const element = await page.find('aui-paper');
    expect(element).toHaveClass('hydrated');
  });
});
