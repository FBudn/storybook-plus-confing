import React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface TextLabelProps {
  children: React.ReactNode;
  color: string | undefined;
  fontSize: number | undefined;
  testId: string | undefined;
}

const TextLabel: React.FC<TextLabelProps> = ({
  children,
  testId,
  color,
  fontSize,
}) => {
  return (
    <View testID={testId}>
      <Text style={styles(color, fontSize).text}>{children}</Text>
    </View>
  );
};

const styles = (
  color?: string | undefined,

  fontSize?: number | undefined
) =>
  StyleSheet.create({
    text: {
      color: `${color}`,
      fontSize,
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
      alignContent: align,
      justifyContent: justify,
      color: `${color}`,
      fontWeight,
      fontSize,
    },
  });

export default TextLabel;

*/
