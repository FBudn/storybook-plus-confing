import React from "react";
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LinkButtonStyles from "./LinkButton.style";

export interface LinkButtonProps {
  children: React.ReactNode;
  onPressLink: (event: GestureResponderEvent) => void;
  testId: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  onPressLink,
  testId,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={LinkButtonStyles.container}
        testID={testId}
        onPress={onPressLink}
      >
        <Text style={LinkButtonStyles.text}> {children} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LinkButton;
