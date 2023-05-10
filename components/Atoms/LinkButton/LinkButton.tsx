import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LinkButtonStyles from "./LinkButton.style";

export interface LinkButtonProps {
  children: React.ReactNode;
  onClickLink: () => void;
  testId: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  onClickLink,
  testId,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={LinkButtonStyles.container}
        testID={testId}
        onPress={onClickLink}
      >
        <Text style={LinkButtonStyles.text}> {children} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LinkButton;
