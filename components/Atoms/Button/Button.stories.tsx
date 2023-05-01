import React from "react";
import { View } from "react-native";
import Button from "./Button";

const ButtonMeta = {
  title: "Button",
  component: Button,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    children: "Hello IM HERE love u much",
    testId: "test-button-id",
  },
};

export default ButtonMeta;

export const Basic = {};

export const AnotherExample = {
  args: {
    children: "Another example",
  },
};
