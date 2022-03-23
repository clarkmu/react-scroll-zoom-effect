import React from "react";
import { storiesOf } from "@storybook/react";
import ScrollZoom from "../components/ScrollZoom";

const stories = storiesOf("Component Test", module);

stories.add("ScrollZoom", () => {
  return (
    <div style={{ height: "300vh" }}>
      <ScrollZoom>OK</ScrollZoom>
    </div>
  );
});
