import { StyleSheet } from "react-native";

interface ResultStylesTypes {
  both: object;
  small: object;
  white: object;
  black: object;
}

const ResultField = StyleSheet.create<ResultStylesTypes>({
  both: {
    textAlign: "right",
    transition: 0.3,
    width: "100%",
  },
  small: { fontSize: 50 },
  white: {
    color: "#2d323a",
  },
  black: {
    color: "#fefefe",
  },
});

export default ResultField;
