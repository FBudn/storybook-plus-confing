import { Dimensions, StyleSheet } from "react-native";

const SignUpTemplateStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(96 165 250)",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    minHeight: Math.round(Dimensions.get("window").height),
  },
  statusbar: {
    backgroundColor: "rgb(96 165 250)",
  },
  textAndLink: {
    flexDirection: "row",
    justifyContent: "center",
    gap: -115,
  },
});

export default SignUpTemplateStyles;
