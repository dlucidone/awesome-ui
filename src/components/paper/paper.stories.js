import { addParameters } from "@storybook/html";
import { withKnobs } from "@storybook/addon-knobs";
import { h } from "jsx-dom";

import readme from "./readme.md";

addParameters({ notes: readme });

export default {
  title: "Paper",
  decorators: [withKnobs]
};

export const defaultPaper = () => {
  return (
    <aui-paper>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget
        sagittis eros. Duis varius interdum molestie. Quisque at tempor est, sed
        accumsan velit. Cras ac pretium mi. Nullam facilisis ante erat, sit amet
        consequat nisl dapibus sed. Pellentesque lacinia semper lacus, a
        bibendum magna dapibus eget. Aliquam consequat laoreet mi, eu ultrices
        dolor laoreet sed. Mauris at erat ex. Sed non lorem vitae orci suscipit
        viverra vel eget ligula. Cras porttitor velit a fringilla commodo. Ut
        luctus ut nisl sit amet tincidunt
      </p>
    </aui-paper>
  );
};
