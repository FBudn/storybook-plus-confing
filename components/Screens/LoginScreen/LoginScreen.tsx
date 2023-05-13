import React from "react";
import LoginTemplate from "../../Templates/LoginTemplate/LoginTemplate";
import ShowLogs from "../../Atoms/ShowLogs";

export interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const onPressButton = (email: string, password: string) => {
    return <ShowLogs email={email} password={password} display="flex" />;
    // console.log(`${email}, ${password}`);
  };

  /* const handleButtonPress = (email: any, password: any) => {
    return onPressButton();
  }; */

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
