import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "../../Atoms/Icon/Icon";

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
    <View data-testid={testId} style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    margin: 4,
  },
});

export default IconsSection;
