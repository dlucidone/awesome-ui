'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-08283c31.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["aui-button.cjs",[[1,"aui-button",{"label":[1],"type":[1],"color":[1],"shape":[1],"size":[1],"variant":[1],"disabled":[516]}]]],["aui-collapse.cjs",[[1,"aui-collapse",{"label":[1],"description":[1],"width":[1],"color":[1],"toggle":[32]}]]],["aui-input.cjs",[[1,"aui-input",{"value":[1],"placeholder":[1],"label":[1]}]]],["aui-paper.cjs",[[1,"aui-paper",{"defaultStyle":[1,"default-style"]}]]],["aui-text.cjs",[[1,"aui-text",{"label":[1],"variant":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
