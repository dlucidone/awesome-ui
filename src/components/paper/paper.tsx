import { Component, h, Prop } from '@stencil/core';
import { CssClassMap } from '../../utils';

@Component({
  tag: 'aui-paper',
  styleUrl: 'paper.scss',
  shadow: true
})
export class Paper {

  @Prop()
  defaultStyle: 'card' = 'card'
  
  private getCssClassMap(): CssClassMap {
    return {
      [this.defaultStyle]: true,
    };
  }

  render() {
    const classMap = this.getCssClassMap();
    return (
      <div class={classMap}>
        <slot></slot>
      </div>
    );
  }

}
