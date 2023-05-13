import React from "react";
import { View } from "react-native";
import FormSignUp from "./FormSignUp";

const FormSignUpMeta = {
  title: "Organisms/FormSignUp",
  component: FormSignUp,
  argTypes: {
    onPressButton: { action: "Button pressed" },
    setEmailValue: { action: "Email value changed" },
    setPasswordValue: { action: "Password value changed" },
  },
  args: {
    children: "FormSignUp",
    testId: "test-formSignUp-id",
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

export default FormSignUpMeta;

export const Basic = {};
