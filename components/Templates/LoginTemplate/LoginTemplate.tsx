import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "../../Atoms/Button/Button";
import CheckboxInput from "../../Atoms/CheckboxInput/CheckboxInput";
import Header from "../../Atoms/Header/Header";
import Icon from "../../Atoms/Icon/Icon";

function LoginTemplate() {
  const onPressIcon = (i: string) => {
    console.log(i);
  };

  const handleIcon1Press = () => {
    onPressIcon(`Facebook`);
  };
  const handleIcon2Press = () => {
    onPressIcon(`Google`);
  };
  const handleIcon3Press = () => {
    onPressIcon(`LinkedIn`);
  };

  return (
    <View style={styles.container} testID="test-app-id">
      <Button onPress={() => console.log(`hey`)} testId="test-button-id">
        HEY
      </Button>
      <CheckboxInput testId="test-checkbox-id" />
      <Header>Header jestem</Header>
      <Icon
        testId="test-icon1-id"
        onPressIcon={handleIcon1Press}
        color="blue"
        icon="facebook"
      />
      <Icon
        testId="test-icon2-id"
        onPressIcon={handleIcon2Press}
        color="red"
        icon="google"
      />
      <Icon
        testId="test-icon3-id"
        onPressIcon={handleIcon3Press}
        color="blue"
        icon="linkedin"
      />
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
