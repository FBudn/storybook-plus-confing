import React from "react";
import { GestureResponderEvent, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import LoginTemplate from "./components/Templates/LoginTemplate/LoginTemplate";

function App() {
  const onPressButton = (event: GestureResponderEvent) => {
    console.log(event);
  };

  const onPressIcon = (icon: string) => {
    console.log(icon);
  };

  const onPressLink = (event: GestureResponderEvent) => {
    console.log(event);
  };
  return (
    <View style={styles.container} testID="test-app-id">
      <LoginTemplate
        onPressButton={onPressButton}
        onPressIcon={onPressIcon}
        onPressLink={onPressLink}
      />
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
  },
});

export default AppEntryPoint;
