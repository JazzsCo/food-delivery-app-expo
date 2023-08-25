import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { themeColors } from "../theme";

const Total = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{ backgroundColor: themeColors.bgColor(0.6) }}
      className="sticky w-full py-6 px-8 rounded-t-3xl space-y-4"
    >
      {/* Delivery Time */}
      <View className="flex-row">
        <Image
          source={require("../assets/images/bikeGuy.png")}
          className="w-24 h-24 rounded-full"
        />
        <View className="flex justify-center items-start ml-5 mt-2">
          <Text className="text-lg font-medium text-gray-800">
            Deliver in 20-30 minutes
          </Text>
          <TouchableOpacity>
            <Text
              style={{ color: themeColors.text }}
              className="font-medium text-lg"
            >
              Change
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-row justify-between">
        <Text className="text-gray-800 font-medium text-base">Menu Fee</Text>
        <Text className="text-gray-800 font-medium text-base">$dd</Text>
      </View>
      <View className="flex-row justify-between">
        <Text className="text-gray-800 font-medium text-base">
          Delivery Fee
        </Text>
        <Text className="text-gray-800 font-medium text-base">$xx</Text>
      </View>
      <View className="flex-row justify-between">
        <Text className="font-extrabold text-lg">Order Total</Text>
        <Text className="font-extrabold text-base">$xx</Text>
      </View>
      <View>
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bgColor(2) }}
          onPress={() => navigation.navigate("PreparingOrder")}
          className="p-4 rounded-full"
        >
          <Text className="text-white text-center font-bold text-lg">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Total;
