import { r as registerInstance, h } from './core-0d9077ad.js';
var Paper = /** @class */ (function () {
    function Paper(hostRef) {
        registerInstance(this, hostRef);
        this.defaultStyle = 'card';
    }
    Paper.prototype.getCssClassMap = function () {
        var _a;
        return _a = {},
            _a[this.defaultStyle] = true,
            _a;
    };
    Paper.prototype.render = function () {
        var classMap = this.getCssClassMap();
        return (h("div", { class: classMap }, h("slot", null)));
    };
    Object.defineProperty(Paper, "style", {
        get: function () { return ":host{display:block}.card{margin:10px;padding:10px;border-radius:2px;-webkit-box-shadow:var(--paper-shadow,0 2px 10px 0 rgba(0,0,0,.16));box-shadow:var(--paper-shadow,0 2px 10px 0 rgba(0,0,0,.16));cursor:pointer;-webkit-transition:.4s;transition:.4s}"; },
        enumerable: true,
        configurable: true
    });
    return Paper;
}());
export { Paper as aui_paper };
