import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

import { themeColors } from "../theme";

const BasketButton = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-row justify-center">
      <View
        style={{ backgroundColor: themeColors.bgColor(2) }}
        className="absolute top-96 w-[96%] mt-5 p-5 rounded-full flex justify-center"
      >
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <View className="flex-row justify-between items-center mx-3">
            <Icon.ShoppingCart
              className={"text-gray-300"}
              strokeWidth={3}
              width={35}
              height={35}
            />
            <Text className="text-gray-200 text-2xl font-medium">
              View Cart
            </Text>
            <Text className="text-gray-200 text-2xl font-medium">$ 40</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BasketButton;
