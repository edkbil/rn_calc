import { StatusBar } from "expo-status-bar";
import { Appearance, View } from "react-native";
import { evaluate } from "mathjs";

import { IBtnElem } from "./src/types/types";

import Number from "./src/components/Number";
import Way from "./src/components/Way";
import Result from "./src/components/Result";
import { useState } from "react";

import AppStyles from "./src/styles/App";
import { operationsCheck, numberCheck } from "./src/features/utils";

export default function App() {
  const colorScheme = Appearance.getColorScheme();

  const [calcWay, setCalcWay] = useState<string[]>([]);
  const [calcNumber, setCalcNumber] = useState<string>("0");
  const [calcDone, setCalcDone] = useState<boolean>(false);
  const [textSize, setTextSize] = useState(70);

  const fixWay = () => {
    setCalcWay([...calcWay.slice(0, -1)]);
    setCalcNumber("");
  };
  const reduceTextSize = () => {
    calcNumber.length > 6 && textSize > 35 && setTextSize((prev) => prev - 7);
  };

  const runCacl = (obj: IBtnElem) => {
    if (!calcDone) {
      reduceTextSize();
      setCalcWay((prev) => [...prev, obj.val]);

      if (operationsCheck(obj.val)) {
        setCalcNumber(obj.val);
      } else {
        if (operationsCheck(calcNumber) || calcNumber === "0") {
          if (obj.val !== ".") {
            setCalcNumber("");
          }
        }
        setCalcNumber((prev) => prev + obj.val);
      }
    } else {
      setCalcWay([...calcNumber, obj.val]);
      setTextSize(70);
      setCalcNumber(obj.val);
      setCalcDone(false);
    }

    if (obj.type === "clear") {
      setCalcWay([]);
      setCalcNumber("0");
      setTextSize(70);
    }

    if (obj.type === "done") {
      if (operationsCheck([...calcWay].pop())) {
        fixWay();
      } else {
        try {
          const result = evaluate(calcWay.join(""));
          const checkResult = numberCheck(result) ? result : result.toFixed(2);
          setCalcNumber(checkResult.toString());
          setCalcDone(true);
        } catch (error) {
          fixWay();
        }
      }
    }
  };

  return (
    <View
      style={[
        AppStyles.container,
        colorScheme === "light" ? AppStyles.white : AppStyles.black,
      ]}
    >
      <StatusBar style="auto" />

      <View style={AppStyles.top}>
        <Way text={calcWay} />
        <Result value={calcNumber} size={textSize} />
      </View>

      <View style={AppStyles.wrap}>
        <Number name={"c"} change={runCacl} option={"clear"} />
        <Number name={"("} change={runCacl} />
        <Number name={")"} change={runCacl} />
        <Number name={"/"} change={runCacl} option={"opesration"} />

        <Number name={"7"} change={runCacl} />
        <Number name={"8"} change={runCacl} />
        <Number name={"9"} change={runCacl} />
        <Number name={"*"} change={runCacl} option={"opesration"} />

        <Number name={"4"} change={runCacl} />
        <Number name={"5"} change={runCacl} />
        <Number name={"6"} change={runCacl} />
        <Number name={"-"} change={runCacl} option={"opesration"} />

        <Number name={"1"} change={runCacl} />
        <Number name={"2"} change={runCacl} />
        <Number name={"3"} change={runCacl} />
        <Number name={"+"} change={runCacl} option={"opesration"} />

        <Number name={"0"} change={runCacl} />
        <Number name={"."} change={runCacl} />
        <Number name={"="} change={runCacl} option={"done"} />
      </View>
    </View>
  );
}
