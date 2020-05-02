import { h } from "@stencil/core";
export class Button {
    constructor() {
        this.type = 'button';
        this.color = 'primary';
        this.shape = 'square';
        this.size = 'default';
        this.variant = 'contained';
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
        return (h("button", { class: classMap, disabled: this.disabled, onClick: this.handleClick.bind(this) }, this.label));
    }
    static get is() { return "aui-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["button.css"]
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
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'button' | 'reset' | 'submit'",
                "resolved": "\"button\" | \"reset\" | \"submit\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "'button'"
        },
        "color": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'primary' | 'accent' | 'light'",
                "resolved": "\"accent\" | \"light\" | \"primary\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "color",
            "reflect": false,
            "defaultValue": "'primary'"
        },
        "shape": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'square' | 'round'",
                "resolved": "\"round\" | \"square\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "shape",
            "reflect": false,
            "defaultValue": "'square'"
        },
        "size": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'small' | 'default' | 'large'",
                "resolved": "\"default\" | \"large\" | \"small\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "size",
            "reflect": false,
            "defaultValue": "'default'"
        },
        "variant": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'outlined' | 'contained'",
                "resolved": "\"contained\" | \"outlined\"",
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
            "defaultValue": "'contained'"
        },
        "disabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "disabled",
            "reflect": true
        }
    }; }
    static get events() { return [{
            "method": "clickEvent",
            "name": "clickEvent",
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
