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
    setCheckboxValue: { action: "Checkbox checked" },
  },
  args: {
    children: "FormLogin",
    testId: "test-formLogin-id",
    secureText: false,
    checkboxValue: false,
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
