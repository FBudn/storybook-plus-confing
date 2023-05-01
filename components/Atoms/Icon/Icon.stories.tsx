import React from "react";
import { View } from "react-native";
import Icon from "./Icon";

const IconMeta = {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
    onPressIcon: { action: "pressed the icon" },
  },
  args: {
    testId: "test-icon-id",
    children: "Icon jestem ",
    color: "blue",
    icon: "facebook",
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

export default IconMeta;

export const Basic = {};
