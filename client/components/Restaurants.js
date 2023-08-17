import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { featured } from "../constants";
import { themeColors } from "../theme";
import RestaurantCard from "./RestaurantCard";

const Restaurants = () => {
  return (
    <View className="mt-3">
      {[featured, featured, featured, featured].map((item, index) => (
        <View key={index}>
          <View className="px-2 py-2 flex-row justify-between items-center">
            <View>
              <Text className="font-semibold">{item.title}</Text>
              <Text className="text-xs text-gray-500">{item.description}</Text>
            </View>
            <TouchableOpacity>
              <Text
                style={{ color: themeColors.text }}
                className="font-semibold"
              >
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <RestaurantCard {...item} />
        </View>
      ))}
    </View>
  );
};

export default Restaurants;
