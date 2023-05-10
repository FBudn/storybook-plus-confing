import { StyleSheet } from "react-native";

const ButtonStyles = StyleSheet.create({
  container: {
    maxHeight: 40,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "rgb(236 72 153)",
    shadowColor: "#94a3b8",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    borderRadius: 5,
  },
  text: { color: "white", fontWeight: "bold" },
});

export default ButtonStyles;
