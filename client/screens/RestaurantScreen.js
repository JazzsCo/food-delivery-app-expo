import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";

import { themeColors } from "../theme";
import Menu from "../components/Menu";
import BasketButton from "../components/BasketButton";
import { selectedRestaurant, setRestaurant } from "../slices/restaurantSlice";
import { emptyCart } from "../slices/cartSlice";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const { params: item } = useRoute();

  const dispatch = useDispatch();

  const restaurant = useSelector(selectedRestaurant);

  React.useEffect(() => {
    if (restaurant && restaurant.id !== item.id) {
      dispatch(emptyCart());
    }

    dispatch(setRestaurant(item));
  }, []);

  return (
    <SafeAreaView>
      <View className="relative">
        <ImageBackground source={item.image} className="w-full h-[75%]" />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themeColors.bgColor(2) }}
          className="absolute p-1 rounded-full shadow top-2 left-2"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={"white"} />
        </TouchableOpacity>
        <View className="absolute top-2/4 w-full h-full pt-6 px-3 bg-slate-100 rounded-t-3xl">
          <Text className="text-2xl font-medium">{item.name}</Text>
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
          <Text className="text-2xl font-medium mt-3 mb-1">Menus</Text>
          <View className="mx-1">
            <ScrollView
              showsVerticalScrollIndicator={false}
              className="overflow-y-visible py-1"
              contentContainerStyle={{
                paddingBottom: 65,
              }}
            >
              {item.dishes.map((item, index) => (
                <Menu key={index} {...item} />
              ))}
            </ScrollView>
          </View>
        </View>
        <BasketButton />
      </View>
    </SafeAreaView>
  );
};

export default RestaurantScreen;
