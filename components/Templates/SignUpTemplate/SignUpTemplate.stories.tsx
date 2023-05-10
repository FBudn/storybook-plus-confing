import React from "react";
import { View } from "react-native";
import SignUpTemplate from "./SignUpTemplate";

const SignUpTemplateMeta = {
  title: "Templates/SignUpTemplate",
  component: SignUpTemplate,
  argTypes: {
    onPressButton: { action: "Button pressed" },
    onPressIcon: { action: "Icon pressed" },
    onPressLink: { action: "Link pressed" },
  },
  args: {
    testId: "test-signUpTemplate-id",
  },
  decorators: [
    (Story: any) => (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default SignUpTemplateMeta;

export const Basic = {};
