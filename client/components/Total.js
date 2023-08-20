import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Icon from "react-native-feather";

import { themeColors } from "../theme";

const Total = () => {
  return (
    <View
      style={{ backgroundColor: themeColors.bgColor(0.5) }}
      className="w-full rounded-3xl shadow-2xl pt-3 -mt-5"
    >
      <Text>hello</Text>
    </View>
  );
};

export default Total;
