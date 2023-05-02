import React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface TextLabelProps {
  children: React.ReactNode;
  color: string;
  align:
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "space-between"
    | "space-around"
    | undefined;
  justify:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | undefined;
  fontWeight:
    | "bold"
    | "normal"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | undefined;
  fontSize: number | undefined;
  testId: string;
  width?: string;
  margin?: string;
}

const TextLabel: React.FC<TextLabelProps> = ({
  children,
  testId,
  color,
  align,
  justify,
  fontWeight,
  fontSize,
  width,
  margin,
}) => {
  return (
    <View
      style={
        styles(undefined, align, justify, undefined, undefined, width, margin)
          .container
      }
    >
      <Text
        testID={testId}
        style={styles(color, undefined, undefined, fontWeight, fontSize).text}
      >
        {children}
      </Text>
    </View>
  );
};

const styles = (
  color?: string,
  align?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "space-between"
    | "space-around"
    | undefined,
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | undefined,
  fontWeight?:
    | "bold"
    | "normal"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | undefined,
  fontSize?: number | undefined,
  width?: string,
  margin?: string
) =>
  StyleSheet.create({
    container: {
      width: `${width}`,
      margin: `${margin}`,
      alignContent: align,
      justifyContent: justify,
    },
    text: {
      color: `${color}`,
      fontWeight,
      fontSize,
    },
  });

export default TextLabel;
