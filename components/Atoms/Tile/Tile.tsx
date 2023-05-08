import React from "react";
import { StyleSheet, View } from "react-native";

export interface TileProps {
  children: any;
  testId: string;
}

const Tile: React.FC<TileProps> = ({ children, testId }) => {
  return (
    <View testID={testId} style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    backgroundColor: "white",
    borderRadius: 10,
    width: "80%",
    padding: 20,
    alignItems: "stretch",
    gap: 10,
  },
});

export default Tile;
