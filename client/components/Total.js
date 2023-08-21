import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import * as Icon from "react-native-feather";

import { themeColors } from "../theme";

const Total = () => {
  return (
    <View className="relative">
      <View
        style={{ backgroundColor: themeColors.bgColor(0.6) }}
        className="absolute top-6 w-full p-6 px-8 rounded-t-3xl space-y-4"
      >
        {/* Delivery Time */}
        <View className="flex-row">
          <Image
            source={require("../assets/images/bikeGuy.png")}
            className="w-24 h-24 rounded-full"
          />
          <View className="flex justify-center items-start space-y-1 ml-2 mt-2">
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
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">$dd</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delivery Fee</Text>
          <Text className="text-gray-700">$xx</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="font-extrabold">Order Total</Text>
          <Text className="font-extrabold">$xx</Text>
        </View>
        <View>
          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgColor(2) }}
            // onPress={() => navigation.navigate("PreparingOrder")}
            className="p-3 rounded-full"
          >
            <Text className="text-white text-center font-bold text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Total;
