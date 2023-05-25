import React, { useState } from "react";
import {
  View,
  StatusBar,
  GestureResponderEvent,
  TouchableOpacity,
} from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Tile from "../../Atoms/Tile/Tile";
import FormLogin from "../../Organisms/FormLogin/FormLogin";
import Footer from "../../Organisms/Footer/Footer";
import LoginTemplateStyles from "./LoginTemplate.style";
import logsReducer, { showLogs } from "../../ReduxTest";
import IconStyles from "../../Atoms/Icon/Icon.style";
import ShowLogs from "../../Atoms/ShowLogs";

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
  const [emailValue, setEmailValue] = useState("");

  const [passwordValue, setPasswordValue] = useState("");

  /* setPasswordValue = (password: any) => {
    passwordValue = password; BŁĄD
  }; */

  const [checkboxValue, setCheckboxValue] = useState(false);

  const handleButtonPress = () => {
    onPressButton(emailValue, passwordValue, checkboxValue);
  };

  const reducer = combineReducers({
    logs: logsReducer,
  });

  const store = configureStore({ reducer });

  const handleStates = store.dispatch(showLogs(emailValue));

  NavigationBar.setBackgroundColorAsync("rgb(96 165 250)");

  return (
    <View style={LoginTemplateStyles.container} testID={testId}>
      <StatusBar backgroundColor="rgb(96 165 250)" />
      <Tile testId="test-tile-id">
        <FormLogin
          onPressButton={handleButtonPress}
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
        <View>
          <TouchableOpacity
            style={IconStyles("blue").container}
            onPress={() => console.log(store.getState())}
          />
        </View>
      </Tile>
    </View>
  );
};

export default LoginTemplate;
