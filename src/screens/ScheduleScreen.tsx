import React from "react";
import Moment from "moment";

import { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity
} from "react-native";
import { Text, Icon, ListItem, Badge } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";

import { colors, spacing, borderRadius, size } from "../ui/theme";
import { workingShiftsForWeek } from "../../mockdata/workingShifts";
import { IWorkingShift } from "typings/workingShift";

type IScheduleScreenProps = NavigationScreenProps;

export class ScheduleScreen extends Component<IScheduleScreenProps> {
  constructor(props: IScheduleScreenProps) {
    super(props);
    this.state = {};
  }

  goToShiftDetailsScreen = () => {
    this.props.navigation.navigate("SHIFT_DETAILS_SCREEN");
  };

  occupiedSettingsIcon = (setting: string) => {
    let color;
    switch (setting) {
      case "free":
        color = colors.green;
        break;
      case "occupied":
        color = colors.red;
        break;
      default:
        color = colors.seagullBlue;
        break;
    }

    return (
      <Icon type={"font-awesome"} name={"calendar"} color={color} size={18} />
    );
  };

  leftElement = (shift: IWorkingShift) => {
    return (
      <View style={styles.leftElement}>
        <Text style={{ fontSize: size.regular }}>
          {Moment(shift.date).format("ddd")}
        </Text>
        <Text style={{ fontSize: size.extraLarge }}>
          {Moment(shift.date).format("DD")}
        </Text>
        {this.occupiedSettingsIcon(shift.occupiedStatus)}
      </View>
    );
  };

  stationBadge = (station: string) => {
    return <Badge value={station} />;
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.listItemContainer}>
        <View style={styles.leftElement}>
          <Text style={{ fontSize: size.regular }}>
            {Moment(item.date).format("ddd")}
          </Text>
          <Text style={{ fontSize: size.extraLarge }}>
            {Moment(item.date).format("DD")}
          </Text>
          {this.occupiedSettingsIcon(item.occupiedStatus)}
        </View>

        <View style={{ flexDirection: "column", flexGrow: 1 }}>
          {item.shifts.length < 1 && (
            <ListItem
              key={item.id}
              title={"Inga pass denna dag"}
              containerStyle={styles.shiftContainer}
            />
          )}
          {item.shifts.map(shift => {
            return (
              <TouchableOpacity
                key={shift.id}
                onPress={this.goToShiftDetailsScreen}
              >
                <ListItem
                  title={shift.time}
                  rightElement={this.stationBadge(shift.station)}
                  containerStyle={styles.shiftContainer}
                  chevron
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <SafeAreaView style={styles.screen}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.listContainer}
          keyExtractor={this.keyExtractor}
          data={workingShiftsForWeek}
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.wildSand
  },
  listContainer: {
    marginHorizontal: spacing.base
  },
  listItemContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  shiftContainer: {
    padding: spacing.base,
    marginVertical: spacing.extraTight,
    borderRadius: borderRadius.rounded
  },
  leftElement: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: spacing.base
  }
});
