import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

type Props = { navigation: NavigationStackProp };
class TabProfile extends React.Component<Props> {
  static navigationOptions = {
    title: "TabProfile"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>TabProfile</Text>
      </View>
    );
  }
}

export default TabProfile;
