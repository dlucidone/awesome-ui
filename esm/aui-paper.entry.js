import { r as registerInstance, h } from './core-0d9077ad.js';

const Paper = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "card" }, h("slot", null)));
    }
    static get style() { return ":host{display:block}.card{margin:10px;padding:10px;border-radius:2px;-webkit-box-shadow:var(--paper-shadow,0 2px 10px 0 rgba(0,0,0,.16));box-shadow:var(--paper-shadow,0 2px 10px 0 rgba(0,0,0,.16));cursor:pointer;-webkit-transition:.4s;transition:.4s;background-color:#fff}"; }
};

export { Paper as aui_paper };
