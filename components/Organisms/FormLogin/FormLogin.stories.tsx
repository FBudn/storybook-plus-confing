import React from "react";
import { View } from "react-native";
import FormLogin from "./FormLogin";

const FormLoginMeta = {
  title: "Molecules/FormLogin",
  component: FormLogin,
  argTypes: {
    onButtonClick: { action: "Button pressed" },
  },
  args: {
    children: "FormLogin",
    testId: "test-formLogin-id",
  },
  decorators: [
    (Story: any) => (
      <View
        style={{
          backgroundColor: "white",
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default FormLoginMeta;

export const Basic = {};
