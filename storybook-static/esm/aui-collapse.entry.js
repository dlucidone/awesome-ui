import { r as registerInstance, c as createEvent, h } from './core-0d9077ad.js';

const Collapse = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toggle = false;
        this.label = "Title";
        this.description = "Description";
        this.onToggle = createEvent(this, "onToggle", 7);
    }
    toggleComponent() {
        this.toggle = !this.toggle;
        this.onToggle.emit({ visible: this.toggle });
    }
    render() {
        return (h("div", { class: "accordions" }, h("div", { class: "accordion-item" }, h("div", { class: `accordion-title ${this.toggle ? 'active-title' : ''}`, "data-tab": "item1", onClick: () => this.toggleComponent() }, h("h2", null, this.label, " ", this.toggle ? h("span", null, "\u25B2") : h("span", null, "\u25BC"))), h("div", { class: `accordion-content ${this.toggle ? 'active' : ''}`, id: "item1" }, h("p", null, this.description)))));
    }
    static get style() { return ".accordions{font-family:Open Sans,Helvetica Neue,Arial,Helvetica,sans-serif}.accordion-item{background-color:#f9f9f9;margin-bottom:20px;border:1px solid #ddd;border-radius:5px}.accordion-item .accordion-title{cursor:pointer;padding:20px;-webkit-transition:all .4s;transition:all .4s;border-radius:5px 5px 0 0}.accordion-item .accordion-title.active-title{background-color:#1a2b60;color:#fff}.accordion-item .accordion-title h2{margin:0;font-size:18px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.accordion-item .accordion-content{display:none;line-height:1.7;padding:20px;background-color:#f9f9f9;border-radius:0 0 5px 5px}.accordion-item .accordion-content.active{display:block}.accordion-item .accordion-content p{margin:0}"; }
};

export { Collapse as aui_collapse };
