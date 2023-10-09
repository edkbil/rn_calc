import { FC } from "react";
import { Appearance, Text } from "react-native";

import ResultField from "../styles/Result";

interface ResultProps {
  value: string;
  size: number;
}

const Result: FC<ResultProps> = ({ value, size }) => {
  const colorScheme = Appearance.getColorScheme();

  return (
    <Text
      style={[
        { fontSize: size },
        ResultField.both,
        colorScheme === "light" ? ResultField.white : ResultField.black,
      ]}
    >
      {value}
    </Text>
  );
};

export default Result;
