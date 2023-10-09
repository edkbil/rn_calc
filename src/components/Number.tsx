import { FC } from "react";
import { Appearance, TouchableOpacity, Text } from "react-native";

import { IBtnElem } from "../types/types";

import NumberStyles from "../styles/Number";
import OperationsStyles from "../styles/Operations";
import BtnText from "../styles/BtnText";
import DoneBtn from "../styles/Done";
import ClearBtn from "../styles/Clear";

interface NumberProps {
  name: string;
  change: (o: IBtnElem) => void;
  option?: string;
}

const Number: FC<NumberProps> = ({ name, change, option }) => {
  const colorScheme = Appearance.getColorScheme();

  return (
    <TouchableOpacity
      style={[
        NumberStyles.both,
        colorScheme === "light" ? NumberStyles.white : NumberStyles.black,
        option === "opesration" && OperationsStyles.btn,
        option === "done" && DoneBtn.btn,
        option === "clear" && ClearBtn.btn,
      ]}
      onPress={() => {
        change({
          val: name,
          type: option as string,
        });
      }}
    >
      <Text
        style={[
          BtnText.both,
          colorScheme === "light" ? BtnText.white : BtnText.black,
          option === "opesration" && OperationsStyles.text,
          option === "done" && DoneBtn.text,
          option === "clear" && ClearBtn.text,
        ]}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default Number;
