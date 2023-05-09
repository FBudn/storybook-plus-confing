import React from "react";
import { StyleSheet, View } from "react-native";
import Input from "../../Atoms/Input/Input";
import TextLabel from "../../Atoms/TextLabel/TextLabel";

export interface InputAndLabelProps {
  children: React.ReactNode;
  testId?: string;
}

export type InputRef = HTMLInputElement;
const InputAndLabel: React.FC<InputAndLabelProps> = ({ children, testId }) => (
  <View testID={testId} style={styles.container}>
    <TextLabel
      color="rgb(82 82 91)"
      textAlign="left"
      fontSize={14}
      testId="test-textLabel-id"
    >
      {children}
    </TextLabel>
    <Input testId="test-input-id" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    gap: 1,
    width: "100%",
  },
});

export default InputAndLabel;
