import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import * as Icon from "react-native-feather";

import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { featured } from "../constants";
import Total from "../components/Total";

const CartScreen = () => {
  const navigation = useNavigation();

  const item = featured.restaurants[0];

  return (
    <View className="relative">
      {/* Top Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ backgroundColor: themeColors.bgColor(2) }}
        className="absolute p-1 rounded-full shadow top-2 left-2"
      >
        <Icon.ArrowLeft strokeWidth={3} stroke={"white"} />
      </TouchableOpacity>
      <View className="flex items-center">
        <Text
          style={{ color: themeColors.text }}
          className="text-xl font-medium mt-1"
        >
          {item.name}
        </Text>
        <Text className="text-gray-700 text-base font-medium">
          {item.description}
        </Text>
      </View>

      {/* Menus */}
      <View className="mt-3 mb-2 px-2 flex-row justify-between items-center">
        <Text
          style={{ color: themeColors.text }}
          className="text-2xl font-medium mt-3 mb-3"
        >
          Menus
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginHorizontal: 15,
        }}
        className="max-h-96"
      >
        {item.dishes.map((item) => (
          <View
            key={item.id}
            className="rounded-xl shadow-xl bg-white p-3 mb-3 "
          >
            <View className="flex-row items-center">
              <Text
                style={{ color: themeColors.text }}
                className="text-xl font-medium ml-1"
              >
                2
              </Text>
              <Text
                style={{ color: themeColors.text }}
                className="text-base font-medium mt-[1px] ml-1"
              >
                x
              </Text>
              <Image
                source={item.image}
                className="w-16 h-16 rounded-xl shadow ml-2"
              />
              <View className="ml-2 flex-1">
                <Text className="text-xl font-medium">{item.name}</Text>
                <Text className="text-base text-gray-700">
                  {item.description}
                </Text>
              </View>
              <Text className="text-lg font-medium mr-4">$ {item.price}</Text>
              <TouchableOpacity
                style={{ backgroundColor: themeColors.bgColor(2) }}
                className="p-1 rounded-full "
              >
                <Icon.Minus
                  strokeWidth={2}
                  width={20}
                  height={20}
                  stroke={"white"}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Total */}
      <Total />
    </View>
  );
};

export default CartScreen;
