import React from "react";
import { useNavigate } from "react-router-dom";
import SignUpTemplate from "../../Templates/SignUpTemplate/SignUpTemplate";

const SignUpScreen: React.FC = () => {
  const onPressButton = (event: GestureResponderEvent) => {
    console.log(event);
  };

  const onPressIcon = (icon: string) => {
    console.log(icon);
  };
  const navigate = useNavigate();
  const onPressLink = (url: string) => {
    navigate(url);
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
