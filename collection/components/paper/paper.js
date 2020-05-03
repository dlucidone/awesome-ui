import { h } from "@stencil/core";
export class Paper {
    render() {
        return (h("div", { class: "card" },
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
}
