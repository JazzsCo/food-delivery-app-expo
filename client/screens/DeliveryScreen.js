import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import * as Icon from "react-native-feather";
import MapView, { Marker } from "react-native-maps";

import { featured } from "../constants";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

const DeliveryScreen = () => {
  const item = featured.restaurants[0];

  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: item.lat,
          longitude: item.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1" // This is main point
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: item.lat,
            longitude: item.lng,
          }}
          title={item.title}
          description={item.description}
          pinColor={themeColors.bgColor(3)}
        />
      </MapView>

      <View className="rounded-t-3xl -mt-12 p-5 bg-white border-t-gray-900">
        <View className="flex-row justify-between pt-4 px-2">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-3xl font-extrabold text-gray-700">
              20-30 Minutes
            </Text>
            <Text className="mt-2 text-gray-700 font-semibold">
              Your Order is own its way
            </Text>
          </View>
          <Image
            className="h-24 w-24"
            source={require("../assets/images/bikeGuy2.gif")}
          />
        </View>

        <View
          style={{ backgroundColor: themeColors.bgColor(0.8) }}
          className="p-2 flex-row justify-between items-center rounded-full mt-3 -mb-2"
        >
          <View
            style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
            className="p-1 rounded-full"
          >
            <Image
              style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
              className="w-16 h-16 rounded-full"
              source={require("../assets/images/deliveryGuy.png")}
            />
          </View>

          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">Syed Noman</Text>
            <Text className="text-white font-semibold">Your Rider</Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Icon.Phone
                fill={themeColors.bgColor(1)}
                stroke={themeColors.bgColor(1)}
                strokeWidth="1"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              className="bg-white p-2 rounded-full"
            >
              <Icon.X stroke={"red"} strokeWidth="5" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;
