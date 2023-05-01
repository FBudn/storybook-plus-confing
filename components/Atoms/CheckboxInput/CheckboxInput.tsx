/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/no-use-before-define */
import Checkbox from "expo-checkbox";
import React from "react";
import { StyleSheet } from "react-native";

export interface CheckboxInputProps {
  testId: string;
}

// export type CheckboxRef = HTMLInputElement;
const CheckboxInput: React.FC<CheckboxInputProps> = ({ testId }) => {
  return <Checkbox style={styles.container} testID={testId} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 0.05,
    maxHeight: 30,
    width: 30,
    maxWidth: 30,
    minHeight: 20,
    minWidth: 20,
    marginLeft: 5,
  },
});

export default CheckboxInput;
