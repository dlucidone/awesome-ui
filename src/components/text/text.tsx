import { Component, h, Prop } from '@stencil/core';
import { CssClassMap } from '../../utils';

@Component({
  tag: 'aui-text',
  styleUrl: 'text.scss',
  shadow: true
})
export class Text {

  @Prop() label: string;

  @Prop()
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'headline' | 'title' | 'subheading' | 'body2' | 'body1' | 'caption' = 'title'

  private getCssClassMap(): CssClassMap {
    return {
      [this.variant]: true,
    };
  }
  render() {

    const classMap = this.getCssClassMap();
    return (
      <div class="typography-container">
        <p class={classMap}>{this.label}</p>
      </div>
    );
  }

}
