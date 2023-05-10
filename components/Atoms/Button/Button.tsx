import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import ButtonStyles from "./Button.style";

export interface ButtonProps {
  onPress: () => void;
  children: string;
  testId: string;
}

function Button({ onPress, children, testId }: ButtonProps) {
  return (
    <View>
      <TouchableOpacity
        style={ButtonStyles.container}
        onPress={onPress}
        testID={testId}
      >
        <Text style={ButtonStyles.text}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Button;
