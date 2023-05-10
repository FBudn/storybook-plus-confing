import React from "react";
import { StyleSheet, View } from "react-native";
import Line from "../../Molecules/Line/Line";
import IconsSection from "../../Molecules/IconsSection/IconsSection";
import TextLabel from "../../Atoms/TextLabel/TextLabel";
import LinkButton from "../../Atoms/LinkButton/LinkButton";

export interface FooterProps {
  onPressIcon: (i: string) => void;
  testId?: string;
  onPressLink: () => void;
  infoText: string;
  linkText: string;
  lineText: string;
}

const Footer: React.FC<FooterProps> = ({
  onPressIcon,
  testId,
  onPressLink,
  infoText,
  linkText,
  lineText,
}) => {
  return (
    <View testID={testId} style={styles.container}>
      <Line>{lineText}</Line>
      <IconsSection onPressIcon={onPressIcon} />
      <View style={styles.textAndLink}>
        <TextLabel
          testId="test-textLabel-id"
          fontSize={20}
          color="rgb(82 82 91)"
        >
          {infoText}
        </TextLabel>
        <LinkButton testId="test-linkButton-id" onClickLink={onPressLink}>
          {linkText}
        </LinkButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    gap: 10,
  },
  textAndLink: {
    flexDirection: "row",
    justifyContent: "center",
    gap: -115,
  },
});

export default Footer;