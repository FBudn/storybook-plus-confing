import React from "react";
import { View } from "react-native";
import CheckboxAndLabel from "./CheckboxAndLabel";

const CheckboxAndLabelMeta = {
  title: "Molecules/CheckboxAndLabel",
  component: CheckboxAndLabel,
  argTypes: {
    setCheckboxValue: { action: "Checbox checked" },
  },
  args: {
    infoText: "CheckboxAndLabel stories",
    testId: "test-checkboxAndLabel-id",
    alignItems: "flex-start",
    checboxValue: false,
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
