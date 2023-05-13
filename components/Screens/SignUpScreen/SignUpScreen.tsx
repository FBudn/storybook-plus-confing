import React from "react";
import SignUpTemplate from "../../Templates/SignUpTemplate/SignUpTemplate";

export interface SignUpScreenProps {
  navigation: any;
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const onPressButton = (email: string, password: string) => {
    console.log(`${email}, ${password}`);
  };

  const handleButtonPress = () => {
    return onPressButton;
  };

  const onPressIcon = (icon: string) => {
    console.log(icon);
  };

  const onPressLink = () => {
    return navigation.navigate(`LoginTemplate`);
  };

  return (
    <SignUpTemplate
      testId="test-signUpScreen-id"
      onPressButton={handleButtonPress}
      onPressIcon={onPressIcon}
      onPressLink={onPressLink}
    />
  );
};

export default SignUpScreen;
