import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "../../Atoms/Button/Button";

function LoginTemplate() {
  return (
    <View style={styles.container} testID="test-app-id">
      <Button onPress={() => console.log(`hey`)} testId="test-button-id">
        HEYo
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(96 165 250)",
    justifyContent: "center",
    margin: 0,
  },
});

export default LoginTemplate;
