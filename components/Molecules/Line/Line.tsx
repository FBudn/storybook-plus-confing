import React from "react";
import { StyleSheet, View, Text } from "react-native";

export interface LineProps {
  children: React.ReactNode;
  testId?: string;
}

const Line: React.FC<LineProps> = ({ children, testId }) => {
  return (
    <View data-testid={testId} style={styles.container}>
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
    borderColor: "rgb(229 231 235)",
    padding: 20,
    borderRadius: 5,
    fontSize: 10,
    lineHeight: 1.25,
    fontWeight: "500",
    color: "rgb(156 163 175)",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    backgroundColor: "red",
  },
  line: { width: 10, borderBottomColor: "gray", borderBottomWidth: 10 },
});

export default Line;
