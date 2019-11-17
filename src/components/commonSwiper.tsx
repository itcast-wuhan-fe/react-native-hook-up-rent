import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Swiper from "react-native-swiper";
import getScreenWidth from "../utils/getScreenWidth";

const defautImages = [
  "http://ww3.sinaimg.cn/large/006y8mN6ly1g6e2tdgve1j30ku0bsn75.jpg",
  "http://ww3.sinaimg.cn/large/006y8mN6ly1g6e2whp87sj30ku0bstec.jpg",
  "http://ww3.sinaimg.cn/large/006y8mN6ly1g6e2tl1v3bj30ku0bs77z.jpg"
];
// 图片宽750px，高424px；
var imageWidth = 750.0;
var imageHeight = 424.0;
var width = getScreenWidth();
var height = (width * imageHeight) / imageWidth;

console.log(height);

const styles = StyleSheet.create({
  wrapper: {
    height: height,
    width: width
  }
});

type Props = { images?: string[] };

export default class CommonSwiper extends Component<Props> {
  static defaultProps = { images: defautImages };
  render() {
    return (
      <View style={styles.wrapper}>
        <Swiper
          autoplay={true}
          // autoplayTimeout={3}
          showsButtons={false}
          // style={styles.wrapper}??
          width={width}
          height={height}
        >
          {this.props.images.map(image => (
            // <View style={styles.slide} key={image}>
            <Image
              key={image}
              source={{ uri: image }}
              style={{ height: height, width: width }}
            ></Image>
            // </View>
          ))}
        </Swiper>
      </View>
    );
  }
}
