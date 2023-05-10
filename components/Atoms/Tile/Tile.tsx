import React from "react";
import { View } from "react-native";
import TileStyles from "./Tile.style";

export interface TileProps {
  children: any;
  testId: string;
}

const Tile: React.FC<TileProps> = ({ children, testId }) => {
  return (
    <View testID={testId} style={TileStyles.container}>
      {children}
    </View>
  );
};

export default Tile;
