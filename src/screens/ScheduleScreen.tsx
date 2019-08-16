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

  goToShiftDetailsScreen = (shift: IWorkingShift) => {
    return () => {
      this.props.navigation.navigate("SHIFT_DETAILS_SCREEN", { shift });
    };
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
        color = colors.ceruleanBlue;
        break;
    }

    return (
      <Icon type={"font-awesome"} name={"calendar"} color={color} size={18} />
    );
  };

  leftElement = (shift: IWorkingShift) => {
    return (
      <View style={styles.dateWrapper}>
        <Text>{Moment(shift.date).format("ddd")}</Text>
        <Text h1>{Moment(shift.date).format("DD")}</Text>
      </View>
    );
  };

  stationBadge = (station: string) => {
    return <Badge value={station} />;
  };

  renderShifts = ({ item }) => {
    return (
      <View style={styles.listItem}>
        {this.leftElement(item)}

        <View style={styles.shiftsWrapper}>
          {item.shifts.length < 1 && (
            <ListItem
              key={item.id}
              title={"Inga pass denna dag"}
              leftElement={this.occupiedSettingsIcon(item.occupiedStatus)}
              titleStyle={{ color: colors.grey, fontStyle: "italic" }}
              containerStyle={styles.shiftContainer}
            />
          )}
          {item.shifts.map((shift: IWorkingShift) => {
            return (
              <TouchableOpacity
                key={shift.id}
                onPress={this.goToShiftDetailsScreen(shift)}
              >
                <ListItem
                  title={shift.time}
                  leftElement={this.occupiedSettingsIcon(item.occupiedStatus)}
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

  keyExtractor = (_item: IWorkingShift, index: number) => index.toString();

  render() {
    return (
      <SafeAreaView style={styles.screen}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.container}
          keyExtractor={this.keyExtractor}
          data={workingShiftsForWeek}
          renderItem={this.renderShifts}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.wildSand,
    flex: 1
  },
  container: {
    paddingHorizontal: spacing.tight
  },
  listItem: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: spacing.tight
  },
  dateWrapper: {
    width: "15%",
    alignItems: "center"
  },
  shiftsWrapper: {
    flexDirection: "column",
    flexGrow: 1
  },
  shiftContainer: {
    borderRadius: borderRadius.rounded,
    marginVertical: spacing.extraTight,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2,
    shadowOpacity: 0.08
  }
});
