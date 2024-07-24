import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'form-input',
  styleUrl: 'form-input.css',
  shadow: false,
})
export class FormInput {
  @Prop() name: string = "name";
  @Prop() inputHandler = null;
  @Prop() checked: boolean = false;

  render() {
    return <label htmlFor={this.name} class="form-input">
        <input
          type="checkbox"
          id={this.name}
          name={this.name}
          checked={this.checked}
          onInput={this.inputHandler}
        />
      {this.name}
      </label>;
  }
}
