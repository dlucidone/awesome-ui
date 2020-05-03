import { addParameters } from "@storybook/html";
import { withKnobs } from "@storybook/addon-knobs";
import { h } from "jsx-dom";

import readme from "./readme.md";

addParameters({ notes: readme });

export default {
  title: "Input",
  decorators: [withKnobs]
};

export const simpleInput = () => {
  return (
    <aui-input
     ></aui-input>
  );
};
