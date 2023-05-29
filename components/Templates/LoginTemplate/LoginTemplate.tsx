import React, { useState } from "react";
import { View, StatusBar, GestureResponderEvent } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Tile from "../../Atoms/Tile/Tile";
import FormLogin from "../../Organisms/FormLogin/FormLogin";
import Footer from "../../Organisms/Footer/Footer";
import LoginTemplateStyles from "./LoginTemplate.style";
import logsReducer, {
  showLogs,
} from "../../Organisms/FormLogin/ReduxFormLogin";

export interface LoginTemplateProps {
  onPressButton?: any;
  onPressIcon: (icon: string) => void;
  onPressLink: (event: GestureResponderEvent) => void;
  testId?: string;
}

const LoginTemplate: React.FC<LoginTemplateProps> = ({
  onPressIcon,
  onPressLink,
  testId,
}) => {
  const [emailValue, setEmailValue] = useState("");

  const [passwordValue, setPasswordValue] = useState("");

  const [checkboxValue, setCheckboxValue] = useState(false);

  /* const handleButtonPress = () => {
    onPressButton(emailValue, passwordValue, checkboxValue);
  }; */

  const reducer = combineReducers({
    logs: logsReducer,
  });

  const store = configureStore({ reducer });

  const handleStates = () => {
    store.dispatch(showLogs({ emailValue, passwordValue, checkboxValue }));
  };

  NavigationBar.setBackgroundColorAsync("rgb(96 165 250)");

  return (
    <View style={LoginTemplateStyles.container} testID={testId}>
      <StatusBar backgroundColor="rgb(96 165 250)" />
      <Tile testId="test-tile-id">
        <FormLogin
          onPressButton={handleStates}
          setEmailValue={setEmailValue}
          setPasswordValue={setPasswordValue}
          setCheckboxValue={setCheckboxValue}
          checkboxValue={checkboxValue}
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
