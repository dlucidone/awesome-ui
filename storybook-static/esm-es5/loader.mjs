import { a as patchEsm, b as bootstrapLazy } from './core-0d9077ad.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["aui-button", [[1, "aui-button", { "label": [1], "type": [1], "color": [1], "shape": [1], "size": [1], "variant": [1], "disabled": [516] }]]], ["aui-collapse", [[1, "aui-collapse", { "label": [1], "description": [1], "width": [1], "color": [1], "toggle": [32] }]]], ["aui-input", [[1, "aui-input", { "value": [1], "placeholder": [1], "label": [1] }]]], ["aui-paper", [[1, "aui-paper", { "defaultStyle": [1, "default-style"] }]]], ["aui-text", [[1, "aui-text", { "label": [1], "variant": [1] }]]]], options);
    });
};
export { defineCustomElements };
