import React from "react";
import { StyleSheet, View, Text } from "react-native";

export interface HeaderProps {
  children: string;
  testId?: string;
}

const Header: React.FC<HeaderProps> = ({ children, testId }) => {
  return (
    <View style={styles.container} testID={testId}>
      <Text style={styles.text}> {children} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.05,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    color: "rgb(82 82 91)",
  },
});

export default Header;
