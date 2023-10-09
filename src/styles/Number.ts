import { StyleSheet } from "react-native";

interface NumberStylesTypes {
  both: object;
  white: object;
  black: object;
}

const NumberStyles = StyleSheet.create<NumberStylesTypes>({
  both: {
    width: 75,
    height: 75,
    margin: 5,
    borderRadius: 16,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  white: {
    color: "#2d323a",
    backgroundColor: "#e9f0f4",
  },
  black: {
    color: "#fdfdfd",
    backgroundColor: "#222427",
  },
});

export default NumberStyles;
