import React from "react";
import { View } from "react-native";
import Button from "../../Atoms/Button/Button";
import Header from "../../Atoms/Header/Header";
import InputAndLabel from "../../Molecules/InputAndLabel/InputAndLabel";
import FormSignUpStyles from "./FormSignUp.style";

export interface FormSignUpProps {
  onPressButton: () => void;
  testId?: string;
  setEmailValue: (e: any) => void;
  setPasswordValue: (e: any) => void;
}

const FormSignUp: React.FC<FormSignUpProps> = ({
  onPressButton,
  testId,
  setEmailValue,
  setPasswordValue,
}) => {
  return (
    <View testID={testId} style={FormSignUpStyles.container}>
      <Header>SIGN UP</Header>
      <InputAndLabel
        testId="test-inputAndLabel-id"
        secureText={false}
        setInputValue={setEmailValue}
      >
        Email
      </InputAndLabel>
      <InputAndLabel
        testId="test-inputAndLabel-id"
        secureText
        setInputValue={setPasswordValue}
      >
        Password
      </InputAndLabel>
      <Button onPressButton={onPressButton} testId="test-button-id">
        SIGN UP
      </Button>
    </View>
  );
};

export default FormSignUp;
