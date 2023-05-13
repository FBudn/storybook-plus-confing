import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import ButtonStyles from "./Button.style";

export interface ButtonProps {
  onPressButton: () => void;
  children: string;
  testId: string;
}

function Button({ onPressButton, children, testId }: ButtonProps) {
  return (
    <View>
      <TouchableOpacity
        style={ButtonStyles.container}
        onPress={onPressButton}
        testID={testId}
      >
        <Text style={ButtonStyles.text}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Button;
