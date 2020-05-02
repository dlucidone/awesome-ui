
import { Component, State, EventEmitter, Event, Prop, h } from '@stencil/core';

@Component({
  tag: 'aui-collapse',
  styleUrl: 'collapse.scss',
  shadow: true
})
export class Collapse {

  @State() toggle: boolean = false;

  @Event() onToggle: EventEmitter;

  @Prop() label: string = "Title";

  @Prop() description: string = "Description";

  @Prop() width: string;

  @Prop() color: string;

  toggleComponent() {
    this.toggle = !this.toggle;
    this.onToggle.emit({ visible: this.toggle });
  }

  render() {

    return (
      <div class="accordions">
        <div class="accordion-item">
          <div class={`accordion-title ${this.toggle ? 'active-title' : ''}`} data-tab="item1" onClick={() => this.toggleComponent()}>
            <h2>{this.label} {this.toggle ? <span>&#9650;</span> : <span>&#9660;</span>}</h2>
          </div>
          <div  class={`accordion-content ${this.toggle ? 'active' : ''}`} id="item1">
            <p>
              {this.description}
              </p>
          </div>
        </div>
      </div>
    )
  }
}


  