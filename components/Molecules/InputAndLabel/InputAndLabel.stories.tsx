import React from "react";
import { View } from "react-native";
import InputAndLabel from "./InputAndLabel";

const InputAndLabelMeta = {
  title: "Molecules/InputAndLabel",
  component: InputAndLabel,
  argTypes: {
    setInputValue: { action: "Input Value changed" },
  },
  args: {
    children: "InputAndLabel",
    testId: "test-inputAndLabel-id",
    secureText: false,
  },
  decorators: [
    (Story: any) => (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default InputAndLabelMeta;

export const Basic = {};
