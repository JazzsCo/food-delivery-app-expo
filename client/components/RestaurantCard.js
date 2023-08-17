import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

import { themeColors } from "../theme";

const RestaurantCard = ({ restaurants }) => {
  const navigation = useNavigation();

  return (
    <ScrollView
      className="overflow-visible px-2 py-1"
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 8,
      }}
    >
      {restaurants.map((item) => (
        <TouchableWithoutFeedback
          key={item.id}
          onPress={() => navigation.navigate("Restaurant", { ...item })}
        >
          <View
            className="rounded-xl shadow-2xl mr-8 bg-white"
            style={{
              shadowColor: themeColors.bgColor(5),
            }}
          >
            <Image source={item.image} className="h-36 w-60 rounded-t-xl" />

            <View className="px-3 pb-4 space-y-2">
              <Text className="font-medium pt-2">{item.name}</Text>
              <View className="flex-row items-center space-x-1">
                <Image
                  source={require("../assets/images/fullStar.png")}
                  className="h-4 w-4"
                />
                <Text className="text-sm text-gray-700">
                  <Text className="text-green-700">{item.stars}</Text>
                  <Text> ({item.reviews} review)</Text> ·{" "}
                  <Text className="font-medium">{item.category}</Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="gray" width={15} height={15} />
                <Text className="text-sm text-gray-500">
                  {" "}
                  Nearby · {item.address}
                </Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </ScrollView>
  );
};

export default RestaurantCard;
