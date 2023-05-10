import React from "react";
import { useNavigate } from "react-router-dom";
import LoginTemplate from "../../Templates/LoginTemplate/LoginTemplate";

const LoginPage: React.FC = () => {
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
    <LoginTemplate
      testId="test-loginPage-id"
      onPressButton={onPressButton}
      onPressIcon={onPressIcon}
      onPressLink={onPressLink}
    />
  );
};

export default LoginPage;
