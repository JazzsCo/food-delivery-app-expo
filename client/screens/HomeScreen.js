import React from "react";
import * as Icon from "react-native-feather";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { themeColors } from "../theme";
import Categories from "../components/Categories";
import Featured from "../components/Featured";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [activeColor, setActiveColor] = React.useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
      <View className="mx-4 mt-2 space-y-3">
        {/* Search Bar */}
        <View className="flex-row items-center space-x-2">
          <View
            style={{ borderColor: themeColors.text }}
            className="flex-row flex-1 items-center p-2 border-[1.5px] rounded-xl"
          >
            <Icon.Search width={20} height={20} stroke={themeColors.text} />
            <TextInput placeholder="Restaurant" className="ml-2 flex-1" />
            <View
              style={{ borderColor: themeColors.text }}
              className="flex-row items-center space-x-1 border-l-2 pl-1"
            >
              <Icon.MapPin width={18} height={18} stroke={themeColors.text} />
              <Text className="text-gray-500">New York, NYC</Text>
            </View>
          </View>
          <View
            style={{
              borderColor: themeColors.text,
              backgroundColor: activeColor ? themeColors.bgColor(2) : "white",
            }}
            className="p-3 rounded-2xl border-[1.5px]"
          >
            <Icon.Sliders
              width={23}
              height={23}
              stroke={activeColor ? "gray" : themeColors.text}
              onPress={() => setActiveColor(!activeColor)}
            />
          </View>
        </View>

        {/* main */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 150 }}
        >
          <Categories />
          <Featured />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
