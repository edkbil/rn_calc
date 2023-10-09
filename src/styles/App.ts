import { StyleSheet } from "react-native";

interface AppStylesTypes {
  container: object;
  top: object;
  wrap: object;
  white: object;
  black: object;
}

const AppStyles = StyleSheet.create<AppStylesTypes>({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 20,
    paddingRight: 17,
    paddingLeft: 17,
    width: "100%",
    height: "100%",
  },
  top: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexGrow: 1,
  },
  wrap: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  white: {
    backgroundColor: "#fff",
  },
  black: {
    backgroundColor: "#000",
  },
});

export default AppStyles;
