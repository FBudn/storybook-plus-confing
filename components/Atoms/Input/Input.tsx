import React from "react";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  View,
} from "react-native";
import InputStyles from "./Input.style";

export interface InputProps {
  testId: string;
  secureText: boolean;
  setInputValue: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

const Input: React.FC<InputProps> = ({ testId, secureText, setInputValue }) => (
  <View>
    <TextInput
      style={InputStyles.container}
      data-testid={testId}
      testID={testId}
      secureTextEntry={secureText}
      onChange={setInputValue}
    />
  </View>
);

export default Input;
