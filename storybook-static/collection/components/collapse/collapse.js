import { h } from "@stencil/core";
export class Collapse {
    constructor() {
        this.toggle = false;
    }
    toggleComponent() {
        this.toggle = !this.toggle;
        this.onToggle.emit({ visible: this.toggle });
    }
    render() {
        return (h("div", { class: "accordions" },
            h("div", { class: "accordion-item" },
                h("div", { class: `accordion-title ${this.toggle ? 'active-title' : ''}`, "data-tab": "item1", onClick: () => this.toggleComponent() },
                    h("h2", null,
                        "Accordion 1 ",
                        this.toggle ? h("span", null, "\u25B2") : h("span", null, "\u25BC"))),
                h("div", { class: `accordion-content ${this.toggle ? 'active' : ''}`, id: "item1" },
                    h("p", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.")))));
    }
    static get is() { return "aui-collapse"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["collapse.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["collapse.css"]
    }; }
    static get properties() { return {
        "label": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "label",
            "reflect": false
        },
        "description": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "description",
            "reflect": false
        },
        "width": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "width",
            "reflect": false
        },
        "color": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "color",
            "reflect": false
        }
    }; }
    static get states() { return {
        "toggle": {}
    }; }
    static get events() { return [{
            "method": "onToggle",
            "name": "onToggle",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
