import React from "react";
import { View } from "react-native";
import CheckboxInput from "./CheckboxInput";

const CheckboxInputMeta = {
  title: "CheckboxInput",
  component: CheckboxInput,
  args: {
    testId: "test-checkbox-id",
  },
  decorators: [
    (Story: any) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default CheckboxInputMeta;

export const Basic = {};
