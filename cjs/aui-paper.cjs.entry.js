'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-08283c31.js');

const Paper = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h("div", { class: "card" }, core.h("slot", null)));
    }
    static get style() { return ":host{display:block}.card{margin:10px;padding:10px;border-radius:2px;-webkit-box-shadow:var(--paper-shadow,0 2px 10px 0 rgba(0,0,0,.16));box-shadow:var(--paper-shadow,0 2px 10px 0 rgba(0,0,0,.16));cursor:pointer;-webkit-transition:.4s;transition:.4s;background-color:#fff}"; }
};

exports.aui_paper = Paper;
