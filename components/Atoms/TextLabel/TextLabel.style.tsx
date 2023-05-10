import { FlexAlignType, StyleSheet } from "react-native";

const TextLabelStyles = (
  color?: string | undefined,

  fontSize?: number | undefined,

  alignItems?: FlexAlignType | undefined,

  textAlign?: any,

  width?: string | number
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

export default TextLabelStyles;
