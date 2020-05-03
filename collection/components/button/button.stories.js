import { storiesOf, addParameters } from "@storybook/html";
import { withKnobs, text } from "@storybook/addon-knobs";
import { withInfo } from '@storybook/addon-info';
import { action } from "@storybook/addon-actions";
import { h } from "jsx-dom";

import readme from "./readme.md";

addParameters({ notes: readme });

export default {
  title: "Button",
  decorators: [withKnobs],
  
};

const label = text("label", "Label");
const btnAction = action("click");
export const simple = () => {
  return <aui-button label={label} onClick={btnAction}></aui-button>
};

export const disabled = () => {
  return <aui-button disabled label={label} onClick={btnAction}></aui-button>;
};

export const color = () => {
  return (
    <div>
    <aui-button label="Button" onClick={btnAction} color="primary"></aui-button>
    <aui-button label="Button" onClick={btnAction} color="accent" style={'margin:10px'} ></aui-button>
    <aui-button label="Button" onClick={btnAction} color="light"></aui-button>
    </div>
  );
};

export const shape = () => {
  return (
    <div>
    <aui-button label="Button" onClick={btnAction} shape="round" style={'margin:10px'} ></aui-button>
    <aui-button label="Button" onClick={btnAction} color="square"></aui-button>
    </div>
  );
};


export const size = () => {
  return (
    <div>
    <aui-button label="Button" onClick={btnAction} size="small"shape="round" style={'margin:10px'} ></aui-button>
    <aui-button label="Button" onClick={btnAction} size="small"color="square"></aui-button>
    <aui-button label="Button" onClick={btnAction} size="large"shape="round" style={'margin:10px'} ></aui-button>
    <aui-button label="Button" onClick={btnAction} size="large"color="square"></aui-button>
    </div>
  );
};


export const variant = () => {
  return (
    <div>
    <aui-button label="Button" onClick={btnAction} variant="outlined" style={'margin:10px'} ></aui-button>
    <aui-button label="Button" onClick={btnAction}></aui-button>
    </div>
  );
};