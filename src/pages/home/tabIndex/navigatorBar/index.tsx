import React, { SFC } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
const dataList = [
  { title: "整租", image: require("./home-index-nav-1.png"), onTap: null },
  { title: "合租", image: require("./home-index-nav-2.gif"), onTap: null },
  { title: "地图找房", image: require("./home-index-nav-3.gif"), onTap: null },
  { title: "去出租", image: require("./home-index-nav-4.gif"), onTap: null }
];

const style = StyleSheet.create({
  wrapper: {
    marginTop: 10,
    flexDirection: "row",
    height: 80,
    justifyContent: "space-around"
  },
  item: {
    width: 60,
    height: 80,
    alignItems: "center",
    justifyContent: "space-between"
  },
  text: {}
});
const NavigatorBar: SFC = () => (
  <View style={style.wrapper}>
    {dataList.map(data => (
      <TouchableOpacity
        key={data.title}
        onPress={() => {
          data.onTap && data.onTap();
        }}
      >
        <View style={style.item}>
          <Image style={{ width: 60, height: 60 }} source={data.image}></Image>
          <Text>{data.title}</Text>
        </View>
      </TouchableOpacity>
    ))}
  </View>
);

export default NavigatorBar;
