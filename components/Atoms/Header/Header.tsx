import React from "react";
import { View, Text } from "react-native";
import HeaderStyles from "./Header.style";

export interface HeaderProps {
  children: string;
  testId?: string;
}

const Header: React.FC<HeaderProps> = ({ children, testId }) => {
  return (
    <View style={HeaderStyles.container} testID={testId}>
      <Text style={HeaderStyles.text}> {children} </Text>
    </View>
  );
};

export default Header;
