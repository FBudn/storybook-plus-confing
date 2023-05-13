import React, { useState } from "react";
import { View, StatusBar, GestureResponderEvent } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import Tile from "../../Atoms/Tile/Tile";
import FormLogin from "../../Organisms/FormLogin/FormLogin";
import Footer from "../../Organisms/Footer/Footer";
import LoginTemplateStyles from "./LoginTemplate.style";

export interface LoginTemplateProps {
  onPressButton: any;
  onPressIcon: (icon: string) => void;
  onPressLink: (event: GestureResponderEvent) => void;
  testId?: string;
}

const LoginTemplate: React.FC<LoginTemplateProps> = ({
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
    <View style={LoginTemplateStyles.container} testID={testId}>
      <StatusBar backgroundColor="rgb(96 165 250)" />
      <Tile testId="test-tile-id">
        <FormLogin
          onPressButton={handleButtonPress}
          setEmailValue={setEmailValue}
          setPasswordValue={setPasswordValue}
          testId="test-formLogin-id"
        />
        <Footer
          testId="test-footer-id"
          onPressIcon={onPressIcon}
          onPressLink={onPressLink}
          lineText="OR"
          linkText="SIGN UP"
          infoText="Need an account?"
        />
      </Tile>
    </View>
  );
};

export default LoginTemplate;
