/* eslint-disable prettier/prettier */
import React from "react";
import { View, StatusBar, GestureResponderEvent } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { useDispatch, useSelector } from "react-redux";
import Tile from "../../Atoms/Tile/Tile";
import FormLogin from "../../Organisms/FormLogin/FormLogin";
import Footer from "../../Organisms/Footer/Footer";
import LoginTemplateStyles from "./LoginTemplate.style";
import {
  showEmail,
  showPassword,
  showCheckbox,
  showLogs,
} from "../../redux/ReduxFormLogin";

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
  const checkboxValue = useSelector((state: any) => state.logs.checkbox);
  const dispatch = useDispatch();
  const handleLogs = () => {
    dispatch(showLogs());
  };

  NavigationBar.setBackgroundColorAsync("rgb(96 165 250)");

  return (
    <View style={LoginTemplateStyles.container} testID={testId}>
      <StatusBar backgroundColor="rgb(96 165 250)" />
      <Tile testId="test-tile-id">
        <FormLogin
          onPressButton={handleLogs}
          setEmailValue={(value) => dispatch(showEmail(value))}
          setPasswordValue={(value) => dispatch(showPassword(value))}
          setCheckboxValue={(value: boolean) => dispatch(showCheckbox(value))}
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
