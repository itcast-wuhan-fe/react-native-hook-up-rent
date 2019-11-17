import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import CommonTitle from '../../../components/commonTitle';
import CommonSwiper from '../../../components/commonSwiper';
import NavigatorBar from './navigatorBar';
import Recommend from './recommend';
import { ScrollView } from 'react-native-gesture-handler';
import Info from '../info';

type Props = { navigation: NavigationStackProp };
class TabIndex extends React.Component<Props> {
  static navigationOptions = {
    title: 'TabIndex'
  };
  render() {
    return (
      <ScrollView>
        <CommonSwiper></CommonSwiper>
        <NavigatorBar></NavigatorBar>
        <CommonTitle title="房屋推荐"></CommonTitle>
        <Recommend></Recommend>
        <CommonTitle title="房产资讯"></CommonTitle>
        <Info></Info>
      </ScrollView>
    );
  }
}

export default TabIndex;
