import { StyleSheet } from "react-native";

const IconStyles = (color: string) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      width: 60,
      height: 60,
      justifyContent: "center",
      alignItems: "center",
      padding: 8,
      fontSize: 1,
      borderRadius: 100,
      borderStyle: "solid",
      borderWidth: 2,
      color: `${color}`,
      borderColor: `${color}`,
    },
  });

export default IconStyles;
