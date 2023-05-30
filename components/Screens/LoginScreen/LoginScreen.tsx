/* eslint-disable prettier/prettier */
import React from "react";
import LoginTemplate from "../../Templates/LoginTemplate/LoginTemplate";

export interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const onPressButton = (
    email: string,
    password: string,
    checkboxValue: boolean
  ) => {
    alert(`${email}, ${password}, ${checkboxValue}`);
  };

  const onPressIcon = (icon: string) => {
    console.log(icon);
  };

  const onPressLink = () => {
    return navigation.navigate(`SignUpTemplate`);
  };

  return (
    <LoginTemplate
      testId="test-loginScreen-id"
      onPressButton={onPressButton}
      onPressIcon={onPressIcon}
      onPressLink={onPressLink}
    />
  );
};

export default LoginScreen;
