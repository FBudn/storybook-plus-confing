import React from "react";
import { View } from "react-native";
import FormLogin from "./FormLogin";

const FormLoginMeta = {
  title: "Organisms/FormLogin",
  component: FormLogin,
  argTypes: {
    onPressButton: { action: "Button pressed" },
    setEmailValue: { action: "Email value changed" },
    setPasswordValue: { action: "Password value changed" },
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
