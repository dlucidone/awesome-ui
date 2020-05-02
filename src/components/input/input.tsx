import { Component, h } from '@stencil/core';

@Component({
  tag: 'aui-input',
  styleUrl: 'input.scss',
  shadow: true
})
export class Input {

  render() {
    return (
      <div class="material">
        <input type="text" placeholder="John Doe" autocomplete="off" required />
        <hr/>
          <label>First Name</label>
	  </div>
    );
  }

}
