import React from "react";
import { FlexAlignType, StyleSheet, View } from "react-native";
import CheckboxInput from "../../Atoms/CheckboxInput/CheckboxInput";
import TextLabel from "../../Atoms/TextLabel/TextLabel";

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
  <View data-testid={testId} style={styles(alignItems).container}>
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

const styles = (alignItems?: FlexAlignType | undefined) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: 3,
      color: "rgb(82 82 91)",
      // margin: 5 0 5 0,
    },
  });

export default CheckboxAndLabel;