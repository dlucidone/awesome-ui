import { addParameters } from "@storybook/html";
import { withKnobs } from "@storybook/addon-knobs";
import { h } from "jsx-dom";

import readme from "./readme.md";

addParameters({ notes: readme });

export default {
  title: "Text",
  decorators: [withKnobs]
};

export const defaultPaper = () => {
  return (
      <div>
    <aui-text label={"Typography"} variant="h1"/>
    <aui-text label={"Typography"} variant="h2"/>
    <aui-text label={"Typography"} variant="h3"/>
    <aui-text label={"Typography"} variant="h4"/>
    <aui-text label={"Typography"} variant="headline"/>
    <aui-text label={"Typography"} variant="title"/>
    <aui-text label={"Typography"} variant="subheading"/>
    <aui-text label={"Typography"} variant="body2"/>
    <aui-text label={"Typography"} variant="body1"/>
    <aui-text label={"Typography"} variant="caption"/>
    </div>
  );
};
