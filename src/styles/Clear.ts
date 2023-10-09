import { StyleSheet } from "react-native";

interface ClearBtnStylesTypes {
  btn: object;
  text: object;
}

const ClearBtn = StyleSheet.create<ClearBtnStylesTypes>({
  btn: {
    backgroundColor: "#ff001533",
  },
  text: {
    color: "#f5444e",
    fontSize: 24,
  },
});

export default ClearBtn;
