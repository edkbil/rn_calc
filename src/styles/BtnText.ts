import { StyleSheet } from "react-native";

interface BtnTextStylesTypes {
  both: object;
  white: object;
  black: object;
}

const BtnText = StyleSheet.create<BtnTextStylesTypes>({
  both: {
    fontSize: 18,
  },
  white: {
    color: "#2d323a",
  },
  black: {
    color: "#fdfdfd",
  },
});

export default BtnText;
