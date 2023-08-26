import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { themeColors } from "../theme";
import Total from "../components/Total";
import { removeToCart, selectedCartItems } from "../slices/cartSlice";
import { selectedRestaurant } from "../slices/restaurantSlice";

const CartScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const restaurant = useSelector(selectedRestaurant);
  const cartItems = useSelector(selectedCartItems);

  const handleDecrease = (item) => {
    dispatch(removeToCart(item));
  };

  // duplicate, unduplicate objects and counts ==> I have this code from ChatGPT (main code)
  const occurrences = [
    ...cartItems.reduce((map, item) => {
      const key = JSON.stringify(item);
      map.set(key, (map.get(key) || 0) + 1);
      return map;
    }, new Map()),
  ].map(([key, value]) => ({ item: JSON.parse(key), count: value }));

  React.useEffect(() => {
    if (!cartItems.length) {
      navigation.goBack();
    }
  }, [cartItems.length]);

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
          {restaurant.name}
        </Text>
        <Text className="text-gray-700 text-base font-medium">
          {restaurant.description}
        </Text>
      </View>

      {/* Menus */}
      <View className="w-full h-full mt-3">
        <Text
          style={{ color: themeColors.text }}
          className="text-2xl font-medium mt-3 mb-2 px-2"
        >
          Menus
        </Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginHorizontal: 15,
          }}
          className="max-h-96"
        >
          {occurrences.map(({ item, count }) => (
            <View
              key={item.id}
              className="rounded-xl shadow-xl bg-white p-3 mb-3 "
            >
              <View className="flex-row items-center">
                <Text
                  style={{ color: themeColors.text }}
                  className="text-xl font-medium ml-1"
                >
                  {count}
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
                  onPress={() => handleDecrease(item)}
                  style={{ backgroundColor: themeColors.bgColor(2) }}
                  className="p-1 rounded-full"
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
    </View>
  );
};

export default CartScreen;
