import React from "react";
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  View,
} from "react-native";
import Input from "../../Atoms/Input/Input";
import TextLabel from "../../Atoms/TextLabel/TextLabel";
import InputAndLabelStyles from "./InputAndLabel.style";

export interface InputAndLabelProps {
  children: React.ReactNode;
  testId?: string;
  secureText: boolean;
  setInputValue: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

export type InputRef = HTMLInputElement;
const InputAndLabel: React.FC<InputAndLabelProps> = ({
  children,
  testId,
  secureText,
  setInputValue,
}) => (
  <View testID={testId} style={InputAndLabelStyles.container}>
    <TextLabel
      color="rgb(82 82 91)"
      textAlign="left"
      fontSize={14}
      testId="test-textLabel-id"
    >
      {children}
    </TextLabel>
    <Input
      testId="test-input-id"
      secureText={secureText}
      setInputValue={setInputValue}
    />
  </View>
);

export default InputAndLabel;
