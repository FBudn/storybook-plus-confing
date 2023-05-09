import React from "react";
import { StyleSheet, View, Text } from "react-native";

export interface LineProps {
  children: React.ReactNode;
  testId?: string;
}

const Line: React.FC<LineProps> = ({ children, testId }) => {
  return (
    <View testID={testId} style={styles.container}>
      <View style={styles.line} />
      <Text data-testid="test-Line-Text" style={styles.text}>
        {children}
      </Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
  },
  text: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgb(213, 202, 202)",
    padding: 10,
    borderRadius: 5,
    fontSize: 15,
    fontWeight: "500",
    color: "rgb(156 163 175)",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  line: {
    width: 117,
    borderBottomColor: "rgb(213, 202, 202)",
    borderBottomWidth: 2,
  },
});

export default Line;
