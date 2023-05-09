import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import Tile from "../../Atoms/Tile/Tile";
import FormLogin from "../../Organisms/FormLogin/FormLogin";
import Footer from "../../Organisms/Footer/Footer";

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
        <FormLogin onButtonClick={handleLink} testId="test-formLogin-id" />
        <Footer
          testId="test-footer-id"
          onPressIcon={onPressIcon}
          onPressLink={handleLink}
          lineText="OR"
          linkText="SIGN UP"
          infoText="Need an account?"
        />
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
