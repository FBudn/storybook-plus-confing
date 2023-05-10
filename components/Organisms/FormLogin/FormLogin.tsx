import React from "react";
import { View } from "react-native";
import Button from "../../Atoms/Button/Button";
import Header from "../../Atoms/Header/Header";
import TextLabel from "../../Atoms/TextLabel/TextLabel";
import CheckboxAndLabel from "../../Molecules/CheckboxAndLabel/CheckboxAndLabel";
import InputAndLabel from "../../Molecules/InputAndLabel/InputAndLabel";
import FormLoginStyles from "./FormLogin.style";

export interface FormLoginProps {
  onButtonClick: (email: string, password: string, checkbox: boolean) => void;
  testId?: string;
}

const FormLogin: React.FC<FormLoginProps> = ({ onButtonClick, testId }) => {
  return (
    <View testID={testId} style={FormLoginStyles.container}>
      <Header>LOGIN</Header>
      <InputAndLabel testId="test-inputAndLabel-id"> Email </InputAndLabel>
      <InputAndLabel testId="test-inputAndLabel-id"> Password </InputAndLabel>
      <CheckboxAndLabel
        testId="test-checkboxAndLabel-id"
        infoText="Remember me?"
        alignItems="flex-start"
      />
      <Button onPress={() => console.log(`hey`)} testId="test-button-id">
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
