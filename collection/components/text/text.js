import { h } from "@stencil/core";
export class Text {
    constructor() {
        this.variant = 'title';
    }
    getCssClassMap() {
        return {
            [this.variant]: true,
        };
    }
    render() {
        const classMap = this.getCssClassMap();
        return (h("div", { class: "typography-container" },
            h("p", { class: classMap }, this.label)));
    }
    static get is() { return "aui-text"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["text.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["text.css"]
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
        "variant": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'h1' | 'h2' | 'h3' | 'h4' | 'headline' | 'title' | 'subheading' | 'body2' | 'body1' | 'caption'",
                "resolved": "\"body1\" | \"body2\" | \"caption\" | \"h1\" | \"h2\" | \"h3\" | \"h4\" | \"headline\" | \"subheading\" | \"title\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "variant",
            "reflect": false,
            "defaultValue": "'title'"
        }
    }; }
}
