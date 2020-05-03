'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-08283c31.js');

const Button = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.type = 'button';
        this.color = 'primary';
        this.shape = 'square';
        this.size = 'default';
        this.variant = 'contained';
        this.clickEvent = core.createEvent(this, "clickEvent", 7);
    }
    handleClick(event) {
        this.clickEvent.emit(event);
    }
    getCssClassMap() {
        return {
            [this.color]: true,
            [this.shape]: true,
            [this.size]: true,
            [this.variant]: true
        };
    }
    render() {
        const classMap = this.getCssClassMap();
        return (core.h("button", { class: classMap, disabled: this.disabled, onClick: this.handleClick.bind(this) }, this.label));
    }
    static get style() { return ":host{-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block}:host([disabled]){pointer-events:none}button{font-family:Open Sans,Helvetica Neue,Arial,Helvetica,sans-serif;cursor:pointer;border:none;background-color:#1a2b60;color:#fff;line-height:20px;font-size:14px;font-weight:400;padding:6px 12px;border-radius:3px;min-width:80px;outline:none}button:hover{background-color:#01144e}button:active{background-color:#00071c}button:disabled{opacity:.4}button.accent{background-color:#ed3810}button.accent:hover{background-color:#610706}button.accent:active{background-color:#310403}button.light{background-color:#f0f1f2;color:rgba(0,0,0,.7)}button.light:hover{background-color:#e2e3e4}button.light:active{background-color:#c8cacb}button.round{border-radius:50px}button.small{padding:2px 8px;font-size:12px}button.large{padding:8px 20px;font-size:16px}button.outlined{background-color:#fff;color:#4571c4;border:1px solid}button.outlined:hover{background-color:#e2e3e4}"; }
};

exports.aui_button = Button;
