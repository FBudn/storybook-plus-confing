import React from "react";
import { FlexAlignType, View } from "react-native";
import CheckboxInput from "../../Atoms/CheckboxInput/CheckboxInput";
import TextLabel from "../../Atoms/TextLabel/TextLabel";
import CheckboxAndLabelStyles from "./CheckboxAndLabel.style";

export interface CheckboxAndLabelProps {
  infoText: React.ReactNode;
  testId?: string;
  alignItems: FlexAlignType | undefined;
}

export type CheckboxRef = HTMLInputElement;
const CheckboxAndLabel: React.FC<CheckboxAndLabelProps> = ({
  infoText,
  testId,
  alignItems,
}) => (
  <View
    data-testid={testId}
    style={CheckboxAndLabelStyles(alignItems).container}
  >
    <CheckboxInput testId="test-checkbox-id" />
    <TextLabel
      color="rgb(82 82 91)"
      fontSize={10}
      testId="test-textLabel-id"
      alignItems="center"
    >
      {infoText}
    </TextLabel>
  </View>
);

export default CheckboxAndLabel;
