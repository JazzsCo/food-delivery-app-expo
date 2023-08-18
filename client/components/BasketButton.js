import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Icon from "react-native-feather";

import { themeColors } from "../theme";

const BasketButton = () => {
  return (
    <View className="flex-row justify-center">
      <View
        style={{ backgroundColor: themeColors.bgColor(2) }}
        className="absolute top-96 w-[96%] mt-5 p-5 rounded-full flex justify-center"
      >
        <TouchableOpacity>
          <View className="flex-row justify-between items-center mx-3">
            <Icon.ShoppingCart
              className="text-gray-700"
              strokeWidth={2}
              width={35}
              height={35}
            />
            <Text className="text-slate-700 text-2xl font-medium">
              View Cart
            </Text>
            <Text className="text-slate-700 text-2xl font-medium">$ 40</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BasketButton;
