import { newE2EPage } from '@stencil/core/testing';

describe('aui-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<aui-text></aui-text>');

    const element = await page.find('aui-text');
    expect(element).toHaveClass('hydrated');
  });
});
