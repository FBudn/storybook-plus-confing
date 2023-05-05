import React from "react";
import { StyleSheet, View, Text } from "react-native";

export interface TileProps {
  children: any;
}

const Tile: React.FC<TileProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    backgroundColor: "white",
    borderRadius: 10,
    width: "80%",
    padding: 16,
  },
  text: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
  },
});

export default Tile;
