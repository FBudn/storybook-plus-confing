import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Button from "../../Atoms/Button/Button";
import CheckboxInput from "../../Atoms/CheckboxInput/CheckboxInput";
import Header from "../../Atoms/Header/Header";
import Icon from "../../Atoms/Icon/Icon";
import Input from "../../Atoms/Input/Input";
import LinkButton from "../../Atoms/LinkButton/LinkButton";
import TextLabel from "../../Atoms/TextLabel/TextLabel";
import Line from "../../Molecules/Line/Line";
import Tile from "../../Atoms/Tile/Tile";

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

  const handleLink = () => {
    console.log(`jol`);
  };

  return (
    <View style={styles.container} testID="test-app-id">
      <StatusBar backgroundColor="rgb(96 165 250)" />
      <Tile>
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
        <Input testId="test-input-id" />
        <LinkButton testId="test-linkButton-id" onClickLink={handleLink}>
          Przycisk Link
        </LinkButton>
        <TextLabel testId="test-textLabel-id" color="red" fontSize={50}>
          Siemaszko
        </TextLabel>
        <Line>OR</Line>
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
});

export default LoginTemplate;
