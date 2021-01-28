import React from "react";
import Lolly from "../MainLolly/Lolly";

export default {
  title: "MainLolly/Lolly",
  component: Lolly,
};

const Template = (args) => <Lolly {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  TopFlavour: "yellow",
  MidFlavour: "red",
  BottomFlavour: "blue",
};

export const Secondary = Template.bind({});
Secondary.args = {
  TopFlavour: "yellow",
  MidFlavour: "red",
  BottomFlavour: "blue",
};
