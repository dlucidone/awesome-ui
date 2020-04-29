import { newSpecPage } from '@stencil/core/testing';
import { AuiButton } from './aui-button';

describe('aui-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AuiButton],
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
