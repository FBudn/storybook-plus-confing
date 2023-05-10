import React from "react";
import { View } from "react-native";
import Input from "../../Atoms/Input/Input";
import TextLabel from "../../Atoms/TextLabel/TextLabel";
import InputAndLabelStyles from "./InputAndLabel.style";

export interface InputAndLabelProps {
  children: React.ReactNode;
  testId?: string;
  secureText: boolean;
}

export type InputRef = HTMLInputElement;
const InputAndLabel: React.FC<InputAndLabelProps> = ({
  children,
  testId,
  secureText,
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
    <Input testId="test-input-id" secureText={secureText} />
  </View>
);

export default InputAndLabel;
