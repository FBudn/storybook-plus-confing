import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export interface ButtonProps {
  onPress: () => void;
  children: string;
  testId: string;
}

function Button({ onPress, children, testId }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      testID={testId}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    maxHeight: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "rgb(236 72 153)",
    shadowColor: "#94a3b8",
    borderRadius: 5,
  },
  text: { color: "white", fontWeight: "bold" },
});

export default Button;
