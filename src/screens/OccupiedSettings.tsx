import React from "react";
import { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import { colors } from "../ui/theme"

type IOccupiedSettingsScreenProps = NavigationScreenProps;

export class OccupiedSettingsScreen extends Component<IOccupiedSettingsScreenProps> {
  constructor(props: IOccupiedSettingsScreenProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Tillgänglighetsinställningar
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