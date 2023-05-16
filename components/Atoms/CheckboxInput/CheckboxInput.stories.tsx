import React from "react";
import { View } from "react-native";
import CheckboxInput from "./CheckboxInput";

const CheckboxInputMeta = {
  title: "Atoms/CheckboxInput",
  component: CheckboxInput,
  argTypes: {
    setCheckboxValue: { action: "Checbox checked" },
  },
  args: {
    testId: "test-checkbox-id",
    checkboxValue: false,
  },
};

export default CheckboxInputMeta;

export const Basic = {};
