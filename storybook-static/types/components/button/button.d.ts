import { EventEmitter } from '../../stencil.core';
export declare class Button {
    clickEvent: EventEmitter;
    label: string;
    type: 'button' | 'reset' | 'submit';
    color: 'primary' | 'accent' | 'light';
    shape: 'square' | 'round';
    size: 'small' | 'default' | 'large';
    variant: 'outlined' | 'contained';
    disabled: boolean;
    handleClick(event: UIEvent): void;
    private getCssClassMap;
    render(): any;
}
