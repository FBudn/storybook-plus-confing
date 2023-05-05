import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export interface ButtonProps {
  onPress: () => void;
  children: string;
  testId: string;
}

function Button({ onPress, children, testId }: ButtonProps) {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        testID={testId}
      >
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 40,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: 5,
    backgroundColor: "rgb(236 72 153)",
    shadowColor: "#94a3b8",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    borderRadius: 5,
  },
  text: { color: "white", fontWeight: "bold" },
});

export default Button;
