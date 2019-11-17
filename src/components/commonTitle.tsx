import { View, Text, StyleSheet } from "react-native";
import React, { SFC } from "react";
import { Ionicons } from "@expo/vector-icons";
type Props = {
  title: String;
};
const CommonTitle: SFC<Props> = ({ title }) => (
  <View style={style.wrapper}>
    <Text style={style.text}>{title + " "}</Text>
    <Ionicons name="ios-arrow-forward" size={style.text.fontSize}></Ionicons>
  </View>
);

const style = StyleSheet.create({
  wrapper: {
    margin: 10,
    marginVertical: 20,
    flexDirection: "row",
    height: 30,
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: "600"
  }
});

export default CommonTitle;
