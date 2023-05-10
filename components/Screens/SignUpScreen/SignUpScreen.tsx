import React from "react";
import { GestureResponderEvent } from "react-native";
import SignUpTemplate from "../../Templates/SignUpTemplate/SignUpTemplate";

export interface SignUpScreenProps {
  navigation: any;
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const onPressButton = (event: GestureResponderEvent) => {
    console.log(event);
  };

  const onPressIcon = (icon: string) => {
    console.log(icon);
  };

  const onPressLink = () => {
    return navigation.navigate(`LoginTemplate`);
  };

  return (
    <SignUpTemplate
      testId="test-signUpScreen-id"
      onPressButton={onPressButton}
      onPressIcon={onPressIcon}
      onPressLink={onPressLink}
    />
  );
};

export default SignUpScreen;
