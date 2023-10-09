import { FC } from "react";
import { Appearance, Text } from "react-native";

import { operationsCheck } from "../features/utils";
import WayStyles from "../styles/Way";

interface WayProps {
  text: string[];
}

const Way: FC<WayProps> = ({ text }) => {
  const colorScheme = Appearance.getColorScheme();

  return (
    <Text style={WayStyles.wrap}>
      {text.map((symb, i) => {
        if (operationsCheck(symb)) {
          return (
            <Text key={i} style={[WayStyles.space, WayStyles.symb]}>
              {symb}
            </Text>
          );
        }
        if (symb === "=") {
          return (
            <Text key={i} style={[WayStyles.space, WayStyles.done]}>
              {symb}
            </Text>
          );
        }
        return (
          <Text
            key={i}
            style={colorScheme === "light" ? WayStyles.white : WayStyles.black}
          >
            {symb}
          </Text>
        );
      })}
    </Text>
  );
};

export default Way;
