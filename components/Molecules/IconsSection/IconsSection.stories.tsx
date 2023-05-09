import React from "react";
import { View } from "react-native";
import IconsSection from "./IconsSection";

const IconsSectionMeta = {
  title: `Molecules/IconsSection`,
  component: IconsSection,
  argTypes: {
    onPressIcon: { action: "Icon pressed" },
  },
  args: {
    testId: `test-iconsSection-id`,
    children: "Icon jestem ",
    color: "blue",
    icon: "facebook",
  },
  decorators: [
    (Story: any) => (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 15,
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default IconsSectionMeta;

export const Basic = {};
