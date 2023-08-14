import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const { params: item } = useRoute();

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView>
      <View className="relative">
        <Image source={item.image} className="w-full h-[75%]" />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themeColors.bgColor(2) }}
          className="absolute p-2 rounded-full shadow top-2 left-2"
        >
          <Icon.ArrowLeft strokeWidth={4} stroke={"white"} />
        </TouchableOpacity>
      </View>
      <View className="-mt-96 pt-6 px-3 bg-white rounded-t-3xl">
        <Text className="text-2xl font-semibold">{item.name}</Text>
        <View className="mt-2 flex-row items-center space-x-1">
          <Image
            source={require("../assets/images/fullStar.png")}
            className="h-4 w-4"
          />
          <Text className="text-base text-green-700">{item.stars}</Text>
          <Text className="text-base text-gray-700">
            {" "}
            {item.reviews} review
          </Text>
          <View className="flex-row items-center">
            <Icon.MapPin color="black" width={15} height={15} />
            <Text className="text-base text-gray-700">
              {" "}
              Nearby · {item.address}
            </Text>
          </View>
        </View>
        <Text className="text-2xl font-semibold mt-3">Menus</Text>
        <ScrollView showsVerticalScrollIndicator={false} className="mt-3">
          {item.dishes.map(({ id, name, description, price, image }) => (
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
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default RestaurantScreen;
