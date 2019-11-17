import React, { SFC } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import getScreenWidth from "../../../../utils/getScreenWidth";
const dataList = [
  { image: require("./home-index-team-1.gif"), onTap: null },
  { image: require("./home-index-team-2.gif"), onTap: null },
  { image: require("./home-index-team-3.gif"), onTap: null },
  { image: require("./home-index-team-4.gif"), onTap: null }
];

const originImageWidth = 334;
const originImageHeight = 191;
const screenWidht = getScreenWidth();
const width = (screenWidht - 10 * 3) / 2;
const height = (width * originImageHeight) / originImageWidth;

const style = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap"
  },
  item: {
    width,
    height,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10
  }
});
const Recommend: SFC = () => (
  <View style={style.wrapper}>
    {dataList.map((data, index) => (
      <TouchableOpacity
        key={index + "recommend"}
        onPress={() => {
          data.onTap && data.onTap();
        }}
      >
        <View style={style.item}>
          <Image style={{ width, height }} source={data.image}></Image>
        </View>
      </TouchableOpacity>
    ))}
  </View>
);

export default Recommend;
