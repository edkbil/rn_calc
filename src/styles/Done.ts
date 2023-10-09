import { StyleSheet } from "react-native";

interface DoneBtnStylesTypes {
  btn: object;
  text: object;
}

const DoneBtn = StyleSheet.create<DoneBtnStylesTypes>({
  btn: {
    width: 160,
    backgroundColor: "#2ec973",
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
});

export default DoneBtn;
