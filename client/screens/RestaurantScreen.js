import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
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
      {/* <StatusBar barStyle={"light-content"} backgroundColor={"black"} /> */}
      <View className="relative">
        <Image source={item.image} className="w-full h-3/4" />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themeColors.bgColor(2) }}
          className="absolute p-2 rounded-full shadow top-2 left-2"
        >
          <Icon.ArrowLeft strokeWidth={4} stroke={"white"} />
        </TouchableOpacity>
      </View>
      <View
        style={{ borderTopLeftRadius: 45, borderTopRightRadius: 45 }}
        className="-mt-12 pt-6 bg-white"
      >
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default RestaurantScreen;
