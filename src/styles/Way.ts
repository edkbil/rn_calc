import { StyleSheet } from "react-native";

interface WayStylesTypes {
  wrap: object;
  space: object;
  white: object;
  black: object;
  symb: object;
  done: object;
}

const WayStyles = StyleSheet.create<WayStylesTypes>({
  wrap: {
    fontSize: 18,
    minHeight: 24,
    marginTop: 30,
    letterSpacing: 1.5,
    wordBreak: "break-all",
    fontWeight: "500",
  },
  space: {
    paddingLeft: 3,
    paddingRight: 3,
  },
  white: {
    color: "#000",
  },
  black: {
    color: "#fff",
  },
  symb: {
    color: "#ff9500",
  },
  done: {
    color: "#2ec973",
  },
});

export default WayStyles;
