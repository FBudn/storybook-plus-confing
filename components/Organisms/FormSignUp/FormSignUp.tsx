import React from "react";
import { View } from "react-native";
import Button from "../../Atoms/Button/Button";
import Header from "../../Atoms/Header/Header";
import InputAndLabel from "../../Molecules/InputAndLabel/InputAndLabel";
import FormSignUpStyles from "./FormSignUp.style";

export interface FormSignUpProps {
  onButtonClick: (
    email: undefined | string,
    password: undefined | string
  ) => void;
  testId?: string;
}

const FormSignUp: React.FC<FormSignUpProps> = ({ onButtonClick, testId }) => {
  return (
    <View testID={testId} style={FormSignUpStyles.container}>
      <Header>LOGIN</Header>
      <InputAndLabel testId="test-inputAndLabel-id"> Email </InputAndLabel>
      <InputAndLabel testId="test-inputAndLabel-id"> Password </InputAndLabel>
      <Button onPress={() => console.log(`hey`)} testId="test-button-id">
        SIGN UP
      </Button>
    </View>
  );
};

export default FormSignUp;
