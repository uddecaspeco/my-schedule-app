import React from "react";
import { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import { colors } from "../ui/theme"

type IShiftDetailsScreenProps = NavigationScreenProps;

export class ShiftDetailsScreen extends Component<IShiftDetailsScreenProps> {
  constructor(props: IShiftDetailsScreenProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Passdetaljer
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