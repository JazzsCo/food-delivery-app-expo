import React from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { featured } from "../constants";
import { themeColors } from "../theme";

const DeliveryScreen = () => {
  const item = featured.restaurants[0];

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
    </View>
  );
};

export default DeliveryScreen;
