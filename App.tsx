/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-mutable-exports */
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import LoginTemplate from "./components/Templates/LoginTemplate/LoginTemplate";

function App() {
  return (
    <View style={styles.container} testID="test-app-id">
      <LoginTemplate />
    </View>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.storybook").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppEntryPoint;
