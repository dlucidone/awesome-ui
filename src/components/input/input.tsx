import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'aui-input',
  styleUrl: 'input.scss',
  shadow: true
})
export class Input {

  @Prop() value: string ="";

  @Prop() placeholder: string ="Placeholder";

  @Prop() label: string ="Label";

  handleChange(event) {
    this.value = event.target.value;
  }

  render() {
    return (
      <div class="material-input">
        <input type="text" placeholder={this.placeholder} autocomplete="off" required value={this.value} onInput={(event) => this.handleChange(event)}/>
        <hr/>
          <label>{this.label}</label>
	  </div>
    );
  }

}
