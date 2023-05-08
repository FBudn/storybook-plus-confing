import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export interface InputProps {
  testId: string;
}

const Input: React.FC<InputProps> = ({ testId }) => (
  <View>
    <TextInput style={styles.container} data-testid={testId} testID={testId} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgb(214 211 209)",
    height: 40,
    width: "100%",
  },
});

export default Input;
