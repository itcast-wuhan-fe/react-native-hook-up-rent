import React, { SFC } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const defaultDataList = [
  {
    title: '置业选择 | 安贞西里 三室一厅 河间的古雅别院',
    imageUri: 'https://wx2.sinaimg.cn/mw1024/005SQLxwly1g6f89l4obbj305v04fjsw.jpg',
    source: '新华网',
    time: '两天前',
    navigateUri: 'login'
  },
  {
    title: '置业佳选 | 大理王宫 苍山洱海间的古雅别院',
    imageUri: 'https://wx2.sinaimg.cn/mw1024/005SQLxwly1g6f89l6hnsj305v04fab7.jpg',
    source: '新华网',
    time: '一周前',
    navigateUri: 'login'
  },
  {
    title: '置业选择 | 安居小屋 花园洋房 清新别野',
    imageUri: 'https://wx4.sinaimg.cn/mw1024/005SQLxwly1g6f89l5jlyj305v04f75q.jpg',
    source: '新华网',
    time: '一周前',
    navigateUri: 'login'
  }
];

const style = StyleSheet.create({
  wrapper: {},
  item: {
    // padding: 10,
    flexDirection: 'row',
    height: 90,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10.0,
    marginHorizontal: 10.0
  },
  itemContent: {
    flex: 1,
    marginLeft: 10.0,
    height: 90,
    justifyContent: 'space-between'
  },
  itemContentFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: { fontWeight: '600', color: 'black' },
  footerText: { color: 'gray' }
});
type Props = { dataList?: typeof defaultDataList };
const Info: SFC<Props> = ({ dataList = defaultDataList }) => (
  <View style={style.wrapper}>
    {dataList.map(data => (
      <TouchableOpacity
        key={data.title}
        onPress={() => {
          // data.navigateUri && ;
        }}
      >
        <View style={style.item}>
          <Image style={{ width: 120, height: 90 }} source={{ uri: data.imageUri }}></Image>
          <View style={style.itemContent}>
            <Text style={style.title}>{data.title}</Text>
            <View style={style.itemContentFooter}>
              <Text style={style.footerText}>{data.source}</Text>
              <Text style={style.footerText}>{data.time}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    ))}
  </View>
);

export default Info;
