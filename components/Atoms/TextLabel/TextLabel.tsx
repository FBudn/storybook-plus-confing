import React from "react";
import { FlexAlignType, Text, View } from "react-native";
import TextLabelStyles from "./TextLabel.style";

export interface TextLabelProps {
  children: React.ReactNode;
  color: string | undefined;
  fontSize: number | undefined;
  testId: string | undefined;
  alignItems?: FlexAlignType | undefined;
  textAlign?: any;
  width?: string | number;
}

const TextLabel: React.FC<TextLabelProps> = ({
  children,
  testId,
  color,
  fontSize,
  alignItems,
  textAlign,
  width,
}) => {
  return (
    <View
      testID={testId}
      style={
        TextLabelStyles(undefined, undefined, alignItems, undefined, width)
          .container
      }
    >
      <Text
        style={
          TextLabelStyles(color, fontSize, undefined, textAlign, undefined).text
        }
      >
        {children}
      </Text>
    </View>
  );
};

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
