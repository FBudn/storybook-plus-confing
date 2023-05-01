import React from "react";
import { View } from "react-native";
import LinkButton from "./LinkButton";

const LinkButtonMeta = {
  title: "Atoms/LinkButton",
  component: LinkButton,
  argTypes: {
    onClickLink: { action: "pressed the linkButton" },
  },
  args: {
    children: "LinkButton",
    testId: "test-linkButton-id",
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

export default LinkButtonMeta;

export const Basic = {};
