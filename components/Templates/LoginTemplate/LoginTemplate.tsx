import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "../../Atoms/Button/Button";
import CheckboxInput from "../../Atoms/CheckboxInput/CheckboxInput";
import Header from "../../Atoms/Header/Header";

function LoginTemplate() {
  return (
    <View style={styles.container} testID="test-app-id">
      <Button onPress={() => console.log(`hey`)} testId="test-button-id">
        HEYo
      </Button>
      <CheckboxInput testId="test-checkbox-id" />
      <Header>Header jestem</Header>
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
