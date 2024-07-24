import { newSpecPage } from '@stencil/core/testing';
import { FormInput } from './form-input';

describe('form-input', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [FormInput],
      html: '<form-input></form-input>',
    });
    expect(root).toEqualHtml(`
      <form-input>
        <mock:shadow-root>
          <div>
            input
          </div>
        </mock:shadow-root>
      </form-input>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [FormInput],
      html: `<form-input></form-input>`,
    });
    expect(root).toEqualHtml(`
      <form-input>
        <mock:shadow-root>
          <div>
            form-input
          </div>
        </mock:shadow-root>
      </form-input>
    `);
  });
});
