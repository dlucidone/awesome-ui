import { r as registerInstance, h } from './core-0d9077ad.js';

const Input = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.value = "";
        this.placeholder = "Placeholder";
        this.label = "Label";
    }
    handleChange(event) {
        this.value = event.target.value;
    }
    render() {
        return (h("div", { class: "material-input" }, h("input", { type: "text", placeholder: this.placeholder, autocomplete: "off", required: true, value: this.value, onInput: (event) => this.handleChange(event) }), h("hr", null), h("label", null, this.label)));
    }
    static get style() { return ".material-input{position:relative;padding:0;margin:5px;border:none;overflow:visible}.material-input input{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;padding:12px 10px 8px;border:none;border-radius:0;-webkit-box-shadow:none;box-shadow:none;border-bottom:1px solid #ddd;font-size:120%;outline:none;cursor:text}.material-input input::-webkit-input-placeholder{-webkit-transition:color .3s ease;transition:color .3s ease}.material-input input:not(:focus)::-webkit-input-placeholder{color:transparent}.material-input hr{content:\"\";display:block;position:absolute;bottom:0;left:0;margin:0;padding:0;width:100%;height:2px;border:none;background:#1a2b60;font-size:1px;will-change:transform,visibility;-webkit-transition:all .2s ease-out;transition:all .2s ease-out;-webkit-transform:scaleX(0);transform:scaleX(0);visibility:hidden;z-index:10}.material-input input:focus~hr{-webkit-transform:scaleX(1);transform:scaleX(1);visibility:visible}.material-input label{position:absolute;top:10px;left:10px;font-size:120%;color:#1a2b60;-webkit-transform-origin:0 -150%;transform-origin:0 -150%;-webkit-transition:-webkit-transform .3s ease;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease;pointer-events:none}.material-input input:focus~label,.material-input input:valid~label{-webkit-transform:scale(.6);transform:scale(.6)}"; }
};

export { Input as aui_input };
