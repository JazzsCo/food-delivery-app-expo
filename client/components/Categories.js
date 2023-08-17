import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";

import { categories } from "../constants";
import { themeColors } from "../theme";

const Categories = () => {
  const [activeColor, setActiveColor] = React.useState();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 5 }}
      style={{ overflow: "visible" }}
    >
      {categories.map(({ id, image, name }) => (
        <View key={id} className={"flex items-center justify-center mr-6"}>
          <TouchableOpacity
            onPress={() => setActiveColor(id)}
            style={{
              borderColor: themeColors.text,
              backgroundColor:
                id === activeColor ? themeColors.bgColor(0.7) : "white",
            }}
            className={"rounded-full border shadow-xl p-1"}
          >
            <Image style={{ width: 45, height: 45 }} source={image} />
          </TouchableOpacity>
          <Text
            style={{ fontWeight: id === activeColor ? "700" : "normal" }}
            className={"text-gray-700 text-sm"}
          >
            {name}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Categories;
