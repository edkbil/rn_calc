import { StyleSheet } from "react-native";

interface OperationsStylesTypes {
  text: object;
  btn: object;
}

const OperationsStyles = StyleSheet.create<OperationsStylesTypes>({
  text: {
    color: "#fff",
    fontSize: 24,
  },
  btn: {
    backgroundColor: "#ff9500",
  },
});

export default OperationsStyles;
