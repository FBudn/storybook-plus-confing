import React from "react";
import { View } from "react-native";
import Line from "./Line";

const LineMeta = {
  title: "Molecules/Line",
  component: Line,
  args: {
    children: "Line",
    testId: "test-line-id",
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

export default LineMeta;

export const Basic = {};
