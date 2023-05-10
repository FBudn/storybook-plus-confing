import React from "react";
import { View } from "react-native";
import Icon from "../../Atoms/Icon/Icon";
import IconsSectionStyles from "./IconsSection.style";

export interface IconsSectionProps {
  onPressIcon: (i: string) => void;
  testId?: string;
}

const IconsSection: React.FC<IconsSectionProps> = ({ onPressIcon, testId }) => {
  const handleIcon1Click = () => {
    onPressIcon(`Facebook`);
  };
  const handleIcon2Click = () => {
    onPressIcon(`Google`);
  };
  const handleIcon3Click = () => {
    onPressIcon(`LinkedIn`);
  };

  return (
    <View testID={testId} style={IconsSectionStyles.container}>
      <Icon
        color="red"
        icon="facebook"
        testId="test-icon1-id"
        onPressIcon={handleIcon1Click}
      />

      <Icon
        color="blue"
        icon="google"
        testId="test-icon2-id"
        onPressIcon={handleIcon2Click}
      />

      <Icon
        color="blue"
        icon="linkedin"
        testId="test-icon3-id"
        onPressIcon={handleIcon3Click}
      />
    </View>
  );
};

export default IconsSection;
