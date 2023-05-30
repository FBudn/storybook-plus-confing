/* eslint-disable prettier/prettier */
import React from "react";
import { TextInput, View } from "react-native";
import InputStyles from "./Input.style";

export interface InputProps {
  testId: string;
  secureText: boolean;
  setInputValue: any;
  value?: any;
}

const Input: React.FC<InputProps> = ({
  testId,
  secureText,
  setInputValue,
  value,
}) => (
  <View>
    <TextInput
      style={InputStyles.container}
      data-testid={testId}
      testID={testId}
      secureTextEntry={secureText}
      onChangeText={setInputValue}
      value={value}
    />
  </View>
);

export default Input;
