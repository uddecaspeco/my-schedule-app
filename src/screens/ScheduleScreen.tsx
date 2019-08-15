import React from "react";
import { Component } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import { colors } from "../ui/theme"

type IScheduleScreenProps = NavigationScreenProps;

export class ScheduleScreen extends Component<IScheduleScreenProps> {
  constructor(props: IScheduleScreenProps) {
    super(props);
    this.state = {};
  }

  goToSubScreen = () => {
    this.props.navigation.navigate("OCCUPIED_SETTINGS_SCREEN");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Schedule</Text>
        {/* <Button title={"Go to a subscreen"} onPress={this.goToSubScreen} /> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.wildSand
  }
});