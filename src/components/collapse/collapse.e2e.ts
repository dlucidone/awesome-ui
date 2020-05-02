import { newE2EPage } from '@stencil/core/testing';

describe('aui-collapse', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<aui-collapse></aui-collapse>');

    const element = await page.find('aui-collapse');
    expect(element).toHaveClass('hydrated');
  });
});
