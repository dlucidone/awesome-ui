import { newE2EPage } from '@stencil/core/testing';

describe('aui-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<aui-input></aui-input>');

    const element = await page.find('aui-input');
    expect(element).toHaveClass('hydrated');
  });
});
