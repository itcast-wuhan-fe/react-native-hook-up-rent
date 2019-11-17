import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

type Props = { navigation: NavigationStackProp };
class TabSearch extends React.Component<Props> {
  static navigationOptions = {
    title: "TabSearch"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>TabSearch</Text>
      </View>
    );
  }
}

export default TabSearch;
