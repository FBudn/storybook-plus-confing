import React from "react";
import { View } from "react-native";
import TextLabel from "./TextLabel";

const TextLabelMeta = {
  title: "Atoms/TextLabel",
  component: TextLabel,
  args: {
    children: "TextLabel",
    testId: "test-textLabel-id",
    color: "red",
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

export default TextLabelMeta;

export const Basic = {};
