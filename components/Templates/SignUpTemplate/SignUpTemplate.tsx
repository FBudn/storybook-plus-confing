import React, { useState } from "react";
import { View, StatusBar, GestureResponderEvent } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import Tile from "../../Atoms/Tile/Tile";
import FormSignUp from "../../Organisms/FormSignUp/FormSignUp";
import Footer from "../../Organisms/Footer/Footer";
import SignUpTemplateStyles from "./SignUpTemplate.style";

export interface SignUpTemplateProps {
  onPressButton: () => void;
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

  setEmailValue = (e: any) => {
    emailValue = e.target.value;
    return emailValue;
  };

  let [passwordValue, setPasswordValue] = useState("");

  setPasswordValue = (e: any) => {
    passwordValue = e.target.value;
    return passwordValue;
  };

  NavigationBar.setBackgroundColorAsync("rgb(96 165 250)");

  return (
    <View style={SignUpTemplateStyles.container} testID={testId}>
      <StatusBar backgroundColor="rgb(96 165 250)" />
      <Tile testId="test-tile-id">
        <FormSignUp
          onPressButton={onPressButton}
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
