import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import { CssClassMap } from '../../utils';

@Component({
  tag: 'aui-button',
  styleUrl: 'button.scss',
  shadow: true,
})

export class Button {

  @Event() clickEvent: EventEmitter;

  @Prop() label: string;

  @Prop()
  type: 'button' | 'reset' | 'submit' = 'button';

  @Prop()
  color: 'primary' | 'accent' | 'light' = 'primary';

  @Prop()
  shape: 'square' | 'round' = 'square';

  @Prop()
  size: 'small' | 'default' | 'large' = 'default';

  @Prop()
  variant: 'outlined' | 'contained' = 'contained'

  @Prop({ reflectToAttr: true })
  disabled: boolean;

  handleClick(event: UIEvent) {
    this.clickEvent.emit(event);
  }

  private getCssClassMap(): CssClassMap {
    return {
      [this.color]: true,
      [this.shape]: true,
      [this.size]: true,
      [this.variant]:true
    };
  }

  render() {
    const classMap = this.getCssClassMap();
    return (
      <button class={classMap} disabled={this.disabled} onClick={this.handleClick.bind(this)}>
        {this.label}
      </button>
    );
  }

}
