import React from "react";
import { View, Text, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { NavigationStackProp } from "react-navigation-stack";

//https://docs.expo.io/versions/latest/guides/icons/
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "react-navigation-tabs";

import TabIndex from "./tabIndex";
import TabInfo from "./tabInfo";
import TabSearch from "./tabSearch";
import TabProfile from "./tabProfile";

enum TabName {
  tabIndex = "TabIndex",
  tabInfo = "TabInfo",
  tabSearch = "TabSearch",
  tabProfile = "TabProfile"
}

export default createBottomTabNavigator(
  {
    [TabName.tabIndex]: TabIndex,
    [TabName.tabInfo]: TabInfo,
    [TabName.tabSearch]: TabSearch,
    [TabName.tabProfile]: TabProfile
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarLabel: ({ tintColor }) => {
        const style = { color: tintColor };
        const { routeName } = navigation.state;
        switch (routeName) {
          case TabName.tabIndex.toString():
            return <Text style={style}>首页</Text>;
          case TabName.tabSearch.toString():
            return <Text style={style}>找房</Text>;
          case TabName.tabInfo.toString():
            return <Text style={style}>资讯</Text>;
          case TabName.tabProfile.toString():
            return <Text style={style}>我的</Text>;
        }
      },
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        switch (routeName) {
          case TabName.tabIndex.toString():
            return <Ionicons name={"md-home"} size={25} color={tintColor} />;
          case TabName.tabSearch.toString():
            return <Ionicons name={"md-search"} size={25} color={tintColor} />;
          case TabName.tabInfo.toString():
            return (
              <Ionicons
                name={"md-information-circle"}
                size={25}
                color={tintColor}
              />
            );
          case TabName.tabProfile.toString():
            return <Ionicons name={"md-contact"} size={25} color={tintColor} />;
        }
      }
    }),
    tabBarOptions: {
      activeTintColor: "#00B8D4",
      inactiveTintColor: "gray"
    }
  }
);
