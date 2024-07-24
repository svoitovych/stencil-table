import { newSpecPage } from '@stencil/core/testing';
import { TableComponent } from './table-component';

describe('table-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [TableComponent],
      html: '<table></table>',
    });
    expect(root).toEqualHtml(`
      <table-component>
        <mock:shadow-root>
          <div>
            TABLE
          </div>
        </mock:shadow-root>
      </table-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [TableComponent],
      html: `<table inner-text="Table text"></table>`,
    });
    expect(root).toEqualHtml(`
      <table inner-text="Table text">
        <mock:shadow-root>
          <div>
            Table inner text
          </div>
        </mock:shadow-root>
      </table>
    `);
  });
});
