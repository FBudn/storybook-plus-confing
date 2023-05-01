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
    maxHeight: 30,
    width: 30,
    maxWidth: 30,
    minHeight: 30,
    minWidth: 30,
    marginLeft: 5,
  },
});

export default CheckboxInput;
