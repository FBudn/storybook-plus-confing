import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

export interface LinkButtonProps {
  children: React.ReactNode;
  onClickLink: () => void;
  testId: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  onClickLink,
  testId,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        testID={testId}
        onPress={onClickLink}
      >
        <Text style={styles.text}> {children} </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
  },
  text: {
    color: "rgb(82 82 91)",
    fontWeight: "500",
    textDecorationLine: "underline",
    textDecorationColor: "rgb(82 82 91)",
    textDecorationStyle: "solid",
    fontSize: 20,
  },
});

export default LinkButton;
