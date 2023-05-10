import { Dimensions, StyleSheet } from "react-native";

const LoginTemplateStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(96 165 250)",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    minHeight: Math.round(Dimensions.get("window").height),
  },
});

export default LoginTemplateStyles;
