import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";

import { themeColors } from "../theme";
import {
  addToCart,
  removeToCart,
  selectedCartItemsById,
} from "../slices/cartSlice";

const Menu = (item) => {
  const dispatch = useDispatch();

  const cartItemsById = useSelector((state) =>
    selectedCartItemsById(state, item.id)
  );

  const hendleIncrease = () => {
    dispatch(addToCart(item));
    // To Do Hello
  };

  const handleDecrease = () => {
    dispatch(removeToCart(item));
  };

  return (
    <View className="flex-row w-full p-3 rounded-xl shadow-2xl bg-white mb-3 bg-w">
      <Image source={item.image} className="w-24 h-24 rounded-xl shadow" />
      <View className="ml-3 flex-1 space-y-1">
        <Text className="text-xl font-medium">{item.name}</Text>
        <Text className="text-base text-gray-700">{item.description}</Text>
        <View className="flex-row justify-between">
          <Text className="text-lg font-medium">$ {item.price}</Text>
          <View className="flex-row space-x-2 mt-1">
            <TouchableOpacity
              onPress={() => handleDecrease()}
              disabled={!cartItemsById.length}
              style={{ backgroundColor: themeColors.bgColor(2) }}
              className="p-1 rounded-full shadow"
            >
              <Icon.Minus strokeWidth={2} stroke={"white"} />
            </TouchableOpacity>
            <Text
              style={{ color: themeColors.text }}
              className="text-lg font-medium"
            >
              {cartItemsById.length}
            </Text>
            <TouchableOpacity
              onPress={() => hendleIncrease()}
              style={{ backgroundColor: themeColors.bgColor(2) }}
              className="p-1 rounded-full shadow"
            >
              <Icon.Plus strokeWidth={2} stroke={"white"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Menu;
