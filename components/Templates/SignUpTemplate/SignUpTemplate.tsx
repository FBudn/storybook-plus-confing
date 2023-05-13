import React, { useState } from "react";
import { View, StatusBar, GestureResponderEvent } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import Tile from "../../Atoms/Tile/Tile";
import FormSignUp from "../../Organisms/FormSignUp/FormSignUp";
import Footer from "../../Organisms/Footer/Footer";
import SignUpTemplateStyles from "./SignUpTemplate.style";

export interface SignUpTemplateProps {
  onPressButton: any;
  onPressIcon: (icon: string) => void;
  onPressLink: (event: GestureResponderEvent) => void;
  testId?: string;
}

const SignUpTemplate: React.FC<SignUpTemplateProps> = ({
  onPressButton,
  onPressIcon,
  onPressLink,
  testId,
}) => {
  let [emailValue, setEmailValue] = useState("");

  setEmailValue = (email: any) => {
    emailValue = email;
  };

  let [passwordValue, setPasswordValue] = useState("");

  setPasswordValue = (password: any) => {
    passwordValue = password;
  };

  const handleButtonPress = () => {
    onPressButton(emailValue, passwordValue);
  };

  NavigationBar.setBackgroundColorAsync("rgb(96 165 250)");

  return (
    <View style={SignUpTemplateStyles.container} testID={testId}>
      <StatusBar backgroundColor="rgb(96 165 250)" />
      <Tile testId="test-tile-id">
        <FormSignUp
          onPressButton={handleButtonPress}
          setEmailValue={setEmailValue}
          setPasswordValue={setPasswordValue}
        />
        <Footer
          testId="test-footer-id"
          onPressIcon={onPressIcon}
          onPressLink={onPressLink}
          lineText="OR"
          linkText="LOGIN"
          infoText="Already an user?"
        />
      </Tile>
    </View>
  );
};

export default SignUpTemplate;
