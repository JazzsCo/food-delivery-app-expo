import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import * as Icon from "react-native-feather";

import { themeColors } from "../theme";

const RestaurantCard = ({ restaurants }) => {
  return (
    <ScrollView
      className="overflow-visible px-2 py-1"
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 8,
      }}
    >
      {restaurants.map(
        ({
          id,
          name,
          image,
          address,
          stars,
          reviews,
          category,
          description,
        }) => (
          <View
            key={id}
            className="rounded-xl shadow-2xl mr-8 bg-white"
            style={{
              shadowColor: themeColors.bgColor(5),
            }}
          >
            <Image source={image} className="h-36 w-60 rounded-t-xl" />

            <View className="px-3 pb-4 space-y-2">
              <Text className="font-bold pt-2">{name}</Text>
              <View className="flex-row items-center space-x-1">
                <Image
                  source={require("../assets/images/fullStar.png")}
                  className="h-4 w-4"
                />
                <Text className="text-xs">
                  <Text className="text-green-700">{stars}</Text>
                  <Text className="text-xs text-gray-500">
                    {" "}
                    ({reviews} review)
                  </Text>{" "}
                  ·{" "}
                  <Text className="font-semibold text-xs text-gray-500">
                    {category}
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="gray" width={15} height={15} />
                <Text className="text-xs text-gray-500">
                  {" "}
                  Nearby · {address}
                </Text>
              </View>
            </View>
          </View>
        )
      )}
    </ScrollView>
  );
};

export default RestaurantCard;
