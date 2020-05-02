import { h } from "@stencil/core";
export class Input {
    constructor() {
        this.value = "";
        this.placeholder = "Placeholder";
        this.label = "Label";
    }
    handleChange(event) {
        this.value = event.target.value;
    }
    render() {
        return (h("div", { class: "material-input" },
            h("input", { type: "text", placeholder: this.placeholder, autocomplete: "off", required: true, value: this.value, onInput: (event) => this.handleChange(event) }),
            h("hr", null),
            h("label", null, this.label)));
    }
    static get is() { return "aui-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["input.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["input.css"]
    }; }
    static get properties() { return {
        "value": {
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
            "attribute": "value",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "placeholder": {
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
            "attribute": "placeholder",
            "reflect": false,
            "defaultValue": "\"Placeholder\""
        },
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
            "reflect": false,
            "defaultValue": "\"Label\""
        }
    }; }
}
