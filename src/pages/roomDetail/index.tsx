import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationStackProp } from "react-navigation-stack";

type Props = { navigation: NavigationStackProp };

class RoomDetailPage extends React.Component<Props> {
  static navigationOptions = {
    title: "RoomDetailPage"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default RoomDetailPage;
