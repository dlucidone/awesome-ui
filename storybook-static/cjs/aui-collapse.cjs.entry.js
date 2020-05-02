'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-08283c31.js');

const Collapse = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.toggle = false;
        this.onToggle = core.createEvent(this, "onToggle", 7);
    }
    toggleComponent() {
        this.toggle = !this.toggle;
        this.onToggle.emit({ visible: this.toggle });
    }
    render() {
        return (core.h("div", { class: "accordions" }, core.h("div", { class: "accordion-item" }, core.h("div", { class: `accordion-title ${this.toggle ? 'active-title' : ''}`, "data-tab": "item1", onClick: () => this.toggleComponent() }, core.h("h2", null, "Accordion 1 ", this.toggle ? core.h("span", null, "\u25B2") : core.h("span", null, "\u25BC"))), core.h("div", { class: `accordion-content ${this.toggle ? 'active' : ''}`, id: "item1" }, core.h("p", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.")))));
    }
    static get style() { return ".accordions{font-family:Open Sans,Helvetica Neue,Arial,Helvetica,sans-serif}.accordion-item{background-color:#f9f9f9;margin-bottom:20px;border:1px solid #ddd;border-radius:5px}.accordion-item .accordion-title{cursor:pointer;padding:20px;-webkit-transition:all .4s;transition:all .4s;border-radius:5px 5px 0 0}.accordion-item .accordion-title.active-title{background-color:#1a2b60;color:#fff}.accordion-item .accordion-title h2{margin:0;font-size:18px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.accordion-item .accordion-content{display:none;line-height:1.7;padding:20px;background-color:#f9f9f9;border-radius:0 0 5px 5px}.accordion-item .accordion-content.active{display:block}.accordion-item .accordion-content p{margin:0}"; }
};

exports.aui_collapse = Collapse;
