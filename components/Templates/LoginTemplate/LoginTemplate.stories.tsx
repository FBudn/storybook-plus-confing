import React from "react";
import { View } from "react-native";
import LoginTemplate from "./LoginTemplate";

const LoginTemplateMeta = {
  title: "Templates/LoginTemplate",
  component: LoginTemplate,
  argTypes: {
    onPressButton: { action: "Button pressed" },
    onPressIcon: { action: "Icon pressed" },
    onPressLink: { action: "Link pressed" },
  },
  args: {
    testId: "test-LoginTemplate-id",
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

export default LoginTemplateMeta;

export const Basic = {};
