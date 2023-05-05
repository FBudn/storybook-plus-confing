import React from "react";
import { View } from "react-native";
import Tile from "./Tile";

const TileMeta = {
  title: "Atoms/Tile",
  component: Tile,
  args: {
    children: "Tile stories",
  },
  decorators: [
    (Story: any) => (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default TileMeta;

export const Basic = {};
