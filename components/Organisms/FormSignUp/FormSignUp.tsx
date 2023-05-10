import React from "react";
import { GestureResponderEvent, View } from "react-native";
import Button from "../../Atoms/Button/Button";
import Header from "../../Atoms/Header/Header";
import InputAndLabel from "../../Molecules/InputAndLabel/InputAndLabel";
import FormSignUpStyles from "./FormSignUp.style";

export interface FormSignUpProps {
  onPressButton: (event: GestureResponderEvent) => void;
  testId?: string;
}

const FormSignUp: React.FC<FormSignUpProps> = ({ onPressButton, testId }) => {
  return (
    <View testID={testId} style={FormSignUpStyles.container}>
      <Header>LOGIN</Header>
      <InputAndLabel testId="test-inputAndLabel-id"> Email </InputAndLabel>
      <InputAndLabel testId="test-inputAndLabel-id"> Password </InputAndLabel>
      <Button onPressButton={onPressButton} testId="test-button-id">
        SIGN UP
      </Button>
    </View>
  );
};

export default FormSignUp;
