'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-08283c31.js');

const Text = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.variant = 'title';
    }
    getCssClassMap() {
        return {
            [this.variant]: true,
        };
    }
    render() {
        const classMap = this.getCssClassMap();
        return (core.h("div", { class: "typography-container" }, core.h("p", { class: classMap }, this.label)));
    }
    static get style() { return ":host{display:block}.typography-container>p{margin:10px 0;padding:0}.h1{font-weight:300;font-size:112px;letter-spacing:-4px}.h2{font-size:56px;letter-spacing:-1px}.h2,.h3{font-weight:400}.h3{font-size:45px;line-height:48px}.h4{font-size:34px;line-height:40px}.h4,.headline{font-weight:400}.headline{font-size:24px;line-height:32px}.title{font-weight:500;font-size:20px;letter-spacing:.3px}.subheading{font-weight:400;font-size:16px}.body2,.subheading{line-height:24px;letter-spacing:.3px}.body2{font-weight:500;font-size:14px}.body1{font-size:14px;line-height:20px}.body1,.caption{font-weight:400;letter-spacing:.3px}.caption{font-size:12px}.button{font-weight:500;font-size:14px;text-transform:uppercase;letter-spacing:.3px}"; }
};

exports.aui_text = Text;
