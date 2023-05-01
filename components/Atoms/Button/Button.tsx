/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/prefer-default-export */
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export interface ButtonProps {
  onPress: () => void;
  text: string;
}

function Button({ onPress, text }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      testID="test-button-id"
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "violet",
  },
  text: { color: "black" },
});

export default Button;
