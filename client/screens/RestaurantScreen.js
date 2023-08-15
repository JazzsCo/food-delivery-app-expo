import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Icon from "react-native-feather";

import { themeColors } from "../theme";
import Menus from "../components/Menus";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const { params: item } = useRoute();

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView>
      <View className="relative">
        <ImageBackground source={item.image} className="w-full h-[75%]" />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themeColors.bgColor(2) }}
          className="absolute p-2 rounded-full shadow top-2 left-2"
        >
          <Icon.ArrowLeft strokeWidth={4} stroke={"white"} />
        </TouchableOpacity>
        <View className="absolute top-2/4 w-full pt-6 px-3 bg-white rounded-t-3xl">
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
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 200 }}
            className="mt-3"
          >
            <Menus {...item} />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RestaurantScreen;
