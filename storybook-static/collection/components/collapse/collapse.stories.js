import { addParameters } from "@storybook/html";
import { withKnobs } from "@storybook/addon-knobs";
import { h } from "jsx-dom";

import readme from "./readme.md";

addParameters({ notes: readme });

export default {
  title: "Collapse",
  decorators: [withKnobs]
};

export const simpleCollapse = () => {
  return (
    <aui-collapse
      width="100%"
      label="Bacon Ipsum"
      description="Bacon ipsum dolor amet pork chop sausage turkey spare ribs ham hock cupim pork loin capicola bacon ham filet mignon prosciutto boudin turducken. Shank corned beef burgdoggen jowl ribeye. Ham pork pastrami rump meatball buffalo venison andouille picanha fatback pork loin. Venison doner porchetta, chicken leberkas fatback burgdoggen ham andouille landjaeger alcatra. Pork belly pork jerky prosciutto leberkas tail salami tongue frankfurter turducken short loin flank."
    ></aui-collapse>
  );
};
