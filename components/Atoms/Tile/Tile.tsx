import React from "react";
import { StyleSheet, View, Text } from "react-native";

export interface TileProps {
  children: any;
}

const Tile: React.FC<TileProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    backgroundColor: "white",
    borderRadius: 10,
    width: "80%",
    padding: 16,
    alignItems: "center",
  },
  text: {
    flex: 1,
    width: "100%",
    textAlign: "center",
  },
});

export default Tile;
