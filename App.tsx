/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-mutable-exports */
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import MyButton from "./components/Atoms/Button/Button";

function App() {
  return (
    <View style={styles.container} testID="test-app-id">
      <Text>start</Text>
      <MyButton onPress={() => console.log(`hey`)} text="Hey" />
    </View>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "false") {
  AppEntryPoint = require("./.storybook").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;
