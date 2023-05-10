import React from "react";
import { TextInput, View } from "react-native";
import InputStyles from "./Input.style";

export interface InputProps {
  testId: string;
  secureText: boolean;
}

const Input: React.FC<InputProps> = ({ testId, secureText }) => (
  <View>
    <TextInput
      style={InputStyles.container}
      data-testid={testId}
      testID={testId}
      secureTextEntry={secureText}
    />
  </View>
);

export default Input;
