import React from "react";
import { View, StatusBar } from "react-native";
import IconsSection from "./IconsSection";

const IconsSectionMeta = {
  title: `Molecules/IconsSection`,
  component: IconsSection,
  argTypes: {
    onPressIcon: { action: "Icon pressed" },
  },
  args: {
    testId: `test-iconsSection-id`,
  },
  decorators: [
    (Story: any) => {
      <>
        <StatusBar backgroundColor="rgb(96 165 250)" />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Story />
        </View>
      </>;
    },
  ],
};

export default IconsSectionMeta;

export const Basic = {};
