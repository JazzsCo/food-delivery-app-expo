import React from "react";
import { View, Image } from "react-native";

import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 3000);
  }, []);

  return (
    <View
      style={{ backgroundColor: themeColors.bgColor(1) }}
      className="flex-1 items-center justify-center bg-white"
    >
      <Image
        source={require("../assets/images/delivery.gif")}
        className="w-36 h-36"
      />
    </View>
  );
};

export default PreparingOrderScreen;
