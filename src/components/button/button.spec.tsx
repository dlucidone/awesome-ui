import { newSpecPage } from '@stencil/core/testing';
import { Button } from './button';

describe('aui-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<aui-button></aui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <aui-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aui-button>
    `);
  });
});
