import React from "react";
import { View } from "react-native";
import InputAndLabel from "./InputAndLabel";

const InputAndLabelMeta = {
  title: "Molecules/InputAndLabel",
  component: InputAndLabel,
  args: {
    children: "InputAndLabel",
    testId: "test-inputAndLabel-id",
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
