import React from "react";
import { TextInput, View } from "react-native";
import InputStyles from "./Input.style";

export interface InputProps {
  testId: string;
}

const Input: React.FC<InputProps> = ({ testId }) => (
  <View>
    <TextInput
      style={InputStyles.container}
      data-testid={testId}
      testID={testId}
    />
  </View>
);

export default Input;
