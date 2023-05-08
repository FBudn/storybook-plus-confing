import React from "react";
import { FlexAlignType, StyleSheet, Text, View } from "react-native";

export interface TextLabelProps {
  children: React.ReactNode;
  color: string | undefined;
  fontSize: number | undefined;
  testId: string | undefined;
  alignItems?: FlexAlignType | undefined;
  textAlign?: any;
}

const TextLabel: React.FC<TextLabelProps> = ({
  children,
  testId,
  color,
  fontSize,
  alignItems,
  textAlign,
}) => {
  return (
    <View
      testID={testId}
      style={styles(undefined, undefined, alignItems).container}
    >
      <Text style={styles(color, fontSize, undefined, textAlign).text}>
        {children}
      </Text>
    </View>
  );
};

const styles = (
  color?: string | undefined,

  fontSize?: number | undefined,

  alignItems?: FlexAlignType | undefined,

  textAlign?: any
) =>
  StyleSheet.create({
    text: {
      color: `${color}`,
      fontSize,
      width: "100%",
      textAlign,
    },
    container: {
      width: "100%",
      alignItems,
    },
  });

export default TextLabel;

/*
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface TextLabelProps {
  children: React.ReactNode;
  color: string | undefined;
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
  testId: string | undefined;
  width?: string | undefined;
  margin?: string | undefined;
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
      testID={testId}
      style={
        styles(color, align, justify, fontWeight, fontSize, width, margin)
          .container
      }
    >
      <Text>{children}</Text>
    </View>
  );
};

const styles = (
  color?: string | undefined,
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
  width?: string | undefined,
  margin?: string | undefined
) =>
  StyleSheet.create({
    container: {
      width: `${width}`,
      margin: `${margin}`,
      alignItems: align,
      justifyContent: justify,
      color: `${color}`,
      fontWeight,
      fontSize,
    },
  });

export default TextLabel;

*/
