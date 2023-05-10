import { FlexAlignType, StyleSheet } from "react-native";

const CheckboxAndLabelStyles = (alignItems?: FlexAlignType | undefined) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: 3,
      color: "rgb(82 82 91)",
      // margin: 5 0 5 0,
    },
  });

export default CheckboxAndLabelStyles;
