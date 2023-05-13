import React from "react";
import { View } from "react-native";
import Input from "./Input";

const InputMeta = {
  title: "Atoms/Input",
  component: Input,
  argTypes: {
    setInputValue: { action: "Input value changed " },
  },
  args: {
    testId: "test-input-id",
    secureText: "boolean",
  },
  decorators: [
    (Story: any) => (
      <View
        style={{
          alignItems: "stretch",
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

export default InputMeta;

export const Basic = {};
