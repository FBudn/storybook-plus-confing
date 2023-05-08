import React from "react";
import { View } from "react-native";
import CheckboxAndLabel from "./CheckboxAndLabel";

const CheckboxAndLabelMeta = {
  title: "Molecules/CheckboxAndLabel",
  component: CheckboxAndLabel,
  args: {
    infoText: "CheckboxAndLabel stories",
    testId: "test-checkboxAndLabel-id",
    alignItems: "flex-start",
  },
  decorators: [
    (Story: any) => (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default CheckboxAndLabelMeta;

export const Basic = {};
