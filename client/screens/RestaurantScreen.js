import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RestaurantScreen = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <View>
      <Text>RestaurantScreen</Text>
    </View>
  );
};

export default RestaurantScreen;
