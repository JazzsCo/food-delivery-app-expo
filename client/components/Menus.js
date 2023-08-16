import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import * as Icon from "react-native-feather";

import { themeColors } from "../theme";

const Menus = ({ dishes }) => {
  return (
    <View>
      {dishes.map(({ id, name, description, price, image }) => (
        <View
          key={id}
          className="flex-row w-full p-3 rounded-xl shadow-3xl mb-3 bg-gray-200"
        >
          <Image source={image} className="w-24 h-24 rounded-xl shadow" />
          <View className="ml-3 flex-1 space-y-1">
            <Text className="text-xl font-semibold">{name}</Text>
            <Text className="text-base text-gray-700">{description}</Text>
            <View className="flex-row justify-between">
              <Text className="text-lg font-medium">$ {price}</Text>
              <View className="flex-row space-x-2 mt-1">
                <TouchableOpacity
                  style={{ backgroundColor: themeColors.bgColor(2) }}
                  className="p-1 rounded-full shadow"
                >
                  <Icon.Minus strokeWidth={2} stroke={"white"} />
                </TouchableOpacity>
                <Text
                  style={{ color: themeColors.text }}
                  className="text-lg font-medium"
                >
                  2
                </Text>
                <TouchableOpacity
                  style={{ backgroundColor: themeColors.bgColor(2) }}
                  className="p-1 rounded-full shadow"
                >
                  <Icon.Plus strokeWidth={2} stroke={"white"} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Menus;
