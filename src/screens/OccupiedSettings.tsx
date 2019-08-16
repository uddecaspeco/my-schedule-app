import React from "react";
import { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text, Input, CheckBox, Card } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import { colors, spacing } from "../ui/theme";

import { Calendar } from "../ui/framework-components/Calendar";

type IOccupiedSettingsScreenProps = NavigationScreenProps;

export class OccupiedSettingsScreen extends Component<
  IOccupiedSettingsScreenProps
> {
  constructor(props: IOccupiedSettingsScreenProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.screen}>
        <Calendar
          markedDates={{
            "2019-08-06": {
              color: "#fcce4e",
              startingDay: true,
              endingDay: true
            },
            "2019-08-09": {
              color: "#fcce4e",
              startingDay: true,
              endingDay: true
            },
            "2019-08-13": {
              color: "#ff7a7a",
              startingDay: true,
              endingDay: true
            },
            "2019-08-14": {
              color: "#a7e0a3",
              startingDay: true,
              endingDay: true
            },
            "2019-08-22": { startingDay: true, color: "#a7e0a3" },
            "2019-08-23": { color: "#a7e0a3" },
            "2019-08-24": { color: "#a7e0a3" },
            "2019-08-25": { endingDay: true, color: "#a7e0a3" }
          }}
          markingType={"period"}
        />
        <View style={styles.container}>
          <Text h1 style={{marginBottom: spacing.base}}>16 augusti 2019</Text>
          <Card>
            <CheckBox
              title="Tillgänglighet ej satt"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked
            />
            <CheckBox
              title="Tillgänglig hela dagen"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={false}
            />
            <CheckBox
              title="Otillgänglig hela dagen"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={false}
            />
            <CheckBox
              title="Tillgäng mellan (...)"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={false}
            />
            <CheckBox
              title="Otillgäng mellan (...)"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={false}
            />
          </Card>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.wildSand
  },
  container: {
    margin: spacing.loose
  }
});
