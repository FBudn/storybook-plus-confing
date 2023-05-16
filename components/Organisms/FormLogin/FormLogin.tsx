import React from "react";
import { View } from "react-native";
import Button from "../../Atoms/Button/Button";
import Header from "../../Atoms/Header/Header";
import TextLabel from "../../Atoms/TextLabel/TextLabel";
import CheckboxAndLabel from "../../Molecules/CheckboxAndLabel/CheckboxAndLabel";
import InputAndLabel from "../../Molecules/InputAndLabel/InputAndLabel";
import FormLoginStyles from "./FormLogin.style";

export interface FormLoginProps {
  onPressButton: any;
  testId?: string;
  setEmailValue: (e: any) => void;
  setPasswordValue: (e: any) => void;
  setCheckboxValue: any;
  checkboxValue: boolean;
}

const FormLogin: React.FC<FormLoginProps> = ({
  onPressButton,
  testId,
  setEmailValue,
  setPasswordValue,
  setCheckboxValue,
  checkboxValue,
}) => {
  return (
    <View testID={testId} style={FormLoginStyles.container}>
      <Header>LOGIN</Header>
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
      <CheckboxAndLabel
        testId="test-checkboxAndLabel-id"
        infoText="Remember me?"
        alignItems="flex-start"
        setCheckboxValue={setCheckboxValue}
        checkboxValue={checkboxValue}
      />
      <Button onPressButton={onPressButton} testId="test-button-id">
        LOGIN
      </Button>
      <TextLabel
        testId="test-textLabel-id"
        fontSize={10}
        color="rgb(82 82 91)"
        alignItems="flex-end"
        textAlign="right"
      >
        Forgot Password?
      </TextLabel>
    </View>
  );
};

export default FormLogin;
