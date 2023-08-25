import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

import { themeColors } from "../theme";
import { useSelector } from "react-redux";
import { selectedCartItems, selectedCartItemsPrice } from "../slices/cartSlice";

const BasketButton = () => {
  const navigation = useNavigation();

  const cartItems = useSelector(selectedCartItems);
  const totalPrice = useSelector(selectedCartItemsPrice);

  return (
    <View className="flex-row justify-center">
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        disabled={!cartItems.length}
        style={{ backgroundColor: themeColors.bgColor(2) }}
        className="absolute top-96 w-[96%] mt-5 p-5 rounded-full flex justify-center"
      >
        <View className="flex-row justify-between items-center mx-3">
          <Icon.ShoppingCart
            className={"text-gray-300"}
            strokeWidth={3}
            width={35}
            height={35}
          />
          <Text className="text-gray-200 text-2xl font-medium">View Cart</Text>
          <Text className="text-gray-200 text-2xl font-medium">
            $ {totalPrice}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BasketButton;
