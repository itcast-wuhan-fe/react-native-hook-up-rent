import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

type Props = { navigation: NavigationStackProp };
class TabInfo extends React.Component<Props> {
  static navigationOptions = {
    title: "TabInfo"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>TabInfo</Text>
      </View>
    );
  }
}

export default TabInfo;
