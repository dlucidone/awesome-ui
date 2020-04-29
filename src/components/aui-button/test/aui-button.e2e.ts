import { newE2EPage } from '@stencil/core/testing';

describe('aui-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<aui-button></aui-button>');

    const element = await page.find('aui-button');
    expect(element).toHaveClass('hydrated');
  });
});
