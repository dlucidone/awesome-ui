
import { Component, State, EventEmitter, Event, Prop, h } from '@stencil/core';

@Component({
  tag: 'aui-collapse',
  styleUrl: 'collapse.scss',
  shadow: true
})
export class Collapse {

  @State() toggle: boolean = false;

  @Event() onToggle: EventEmitter;

  @Prop() label: string;

  @Prop() description: string;

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
            <h2>Accordion 1 {this.toggle ? <span>&#9650;</span> : <span>&#9660;</span>}</h2>
          </div>
          <div  class={`accordion-content ${this.toggle ? 'active' : ''}`} id="item1">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          </p>
          </div>
        </div>
      </div>
    )
  }
}


  