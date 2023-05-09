import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import Button from "../../Atoms/Button/Button";
import CheckboxAndLabel from "../../Molecules/CheckboxAndLabel/CheckboxAndLabel";
import Header from "../../Atoms/Header/Header";
import Input from "../../Atoms/Input/Input";
import LinkButton from "../../Atoms/LinkButton/LinkButton";
import TextLabel from "../../Atoms/TextLabel/TextLabel";
import Line from "../../Molecules/Line/Line";
import Tile from "../../Atoms/Tile/Tile";
import IconsSection from "../../Molecules/IconsSection/IconsSection";
import InputAndLabel from "../../Molecules/InputAndLabel/InputAndLabel";

function LoginTemplate() {
  const onPressIcon = (i: string) => {
    console.log(i);
  };

  const handleLink = () => {
    console.log(`jol`);
  };

  NavigationBar.setBackgroundColorAsync("rgb(96 165 250)");

  return (
    <View style={styles.container} testID="test-app-id">
      <StatusBar backgroundColor="rgb(96 165 250)" />
      <Tile testId="test-tile-id">
        <Header>LOGIN</Header>
        <InputAndLabel> Email </InputAndLabel>
        <InputAndLabel> Password </InputAndLabel>
        <CheckboxAndLabel
          testId="test-checkboxAndLabel-id"
          infoText="Remember me?"
          alignItems="flex-start"
        />
        <Button onPress={() => console.log(`hey`)} testId="test-button-id">
          HEY
        </Button>
        <TextLabel
          testId="test-textLabel-id"
          fontSize={10}
          color="rgb(82 82 91)"
          alignItems="flex-end"
          textAlign="right"
        >
          Forgot Password?
        </TextLabel>
        <Line>OR</Line>
        <IconsSection onPressIcon={onPressIcon} />
        <View style={styles.textAndLink}>
          <TextLabel
            testId="test-textLabel-id"
            fontSize={20}
            color="rgb(82 82 91)"
          >
            Need an account?
          </TextLabel>
          <LinkButton testId="test-linkButton-id" onClickLink={handleLink}>
            SIGN UP
          </LinkButton>
        </View>
      </Tile>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(96 165 250)",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  statusbar: {
    backgroundColor: "rgb(96 165 250)",
  },
  textAndLink: {
    flexDirection: "row",
    justifyContent: "center",
    gap: -115,
  },
});

export default LoginTemplate;
