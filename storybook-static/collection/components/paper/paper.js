import { h } from "@stencil/core";
export class Paper {
    constructor() {
        this.defaultStyle = 'card';
    }
    getCssClassMap() {
        return {
            [this.defaultStyle]: true,
        };
    }
    render() {
        const classMap = this.getCssClassMap();
        return (h("div", { class: classMap },
            h("slot", null)));
    }
    static get is() { return "aui-paper"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["paper.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["paper.css"]
    }; }
    static get properties() { return {
        "defaultStyle": {
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
            "attribute": "default-style",
            "reflect": false,
            "defaultValue": "'card'"
        }
    }; }
}
