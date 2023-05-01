import React from "react";
import { View } from "react-native";
import Header from "./Header";

const HeaderMeta = {
  title: "Atoms/Header",
  component: Header,
  args: {
    testId: "test-header-id",
    children: "Header jestem 2",
  },
  decorators: [
    (Story: any) => (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default HeaderMeta;

export const Basic = {};
