import { EventEmitter } from '../../stencil.core';
export declare class Collapse {
    toggle: boolean;
    onToggle: EventEmitter;
    label: string;
    description: string;
    width: string;
    color: string;
    toggleComponent(): void;
    render(): any;
}
