import React from "react";
import { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import { colors } from "../ui/theme"

type ISettingsScreenProps = NavigationScreenProps;

export class SettingsScreen extends Component<ISettingsScreenProps> {
  constructor(props: ISettingsScreenProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Settings for profile?
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.wildSand
  }
});