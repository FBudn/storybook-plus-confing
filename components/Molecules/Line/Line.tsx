import React from "react";
import { View, Text } from "react-native";
import LineStyles from "./Line.style";

export interface LineProps {
  children: React.ReactNode;
  testId?: string;
}

const Line: React.FC<LineProps> = ({ children, testId }) => {
  return (
    <View testID={testId} style={LineStyles.container}>
      <View style={LineStyles.line} />
      <Text data-testid="test-Line-Text" style={LineStyles.text}>
        {children}
      </Text>
      <View style={LineStyles.line} />
    </View>
  );
};

export default Line;
