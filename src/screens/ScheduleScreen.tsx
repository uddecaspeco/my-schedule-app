import React from "react";
import Moment from "moment";

import { Component } from "react";
import { StyleSheet, FlatList, View, TouchableOpacity } from "react-native";
import { Text, Icon, ListItem, Badge, Header, Card } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import { IWorkingShift } from "typings/workingShift";
import { IScheduleDateValues } from "typings/scheduleDateValues";
import { IStation } from "typings/station";
import { colors, spacing } from "../ui/theme";
import { Calendar } from "../ui/framework-components/Calendar";
import { workingShiftsMockData } from "../../mockdata/workingShiftsMockData";

import "moment/locale/sv";

type IScheduleScreenProps = NavigationScreenProps;

Moment.locale("sv");

export class ScheduleScreen extends Component<IScheduleScreenProps> {
  constructor(props: IScheduleScreenProps) {
    super(props);
    this.state = {
      modalIsVisible: false
    };
  }

  goToShiftDetailsScreen = (shift: IWorkingShift) => {
    return () => {
      this.props.navigation.navigate("SHIFT_DETAILS_SCREEN", { shift });
    };
  };

  toggleModal = () => {
    this.setState({ modalIsVisible: !this.state.modalIsVisible });
  };

  renderToggleCalendarComponent = () => {
    return (
      <TouchableOpacity
        style={styles.row}
        onPress={this.toggleModal}
        activeOpacity={0.5}
      >
        <Icon
          type={"font-awesome"}
          name={"calendar"}
          color={colors.white}
          raised={!this.state.modalIsVisible}
          reverse
          size={18}
          iconStyle={{ color: colors.ceruleanBlue }}
        />
      </TouchableOpacity>
    );
  };
  renderOccupiedSettingsIcon = (setting: string) => {
    let color: string;
    let name: string;
    switch (setting) {
      case "free":
        color = colors.green;
        name = "calendar-check-o";
        break;
      case "occupied":
        color = colors.red;
        name = "calendar-times-o";
        break;
      default:
        color = colors.ceruleanBlue;
        name = "calendar-check-o";
        break;
    }

    return <Icon type={"font-awesome"} name={name} color={color} size={18} />;
  };

  renderCommentIcon = () => {
    return (
      <Icon
        type={"font-awesome"}
        name={"comment"}
        color={colors.ceruleanBlue}
        size={18}
      />
    );
  };

  renderdate = (shift: IWorkingShift) => {
    const shiftMoment = Moment(shift.date);
    const isFakeToday = shiftMoment.isBetween("2019-08-15", "2019-08-17");
    const dateStatusStyle = isFakeToday ? { color: colors.ceruleanBlue } : {};
    return (
      <View style={styles.dateWrapper}>
        <Text style={dateStatusStyle}>{shiftMoment.format("ddd")}</Text>
        <Text h1 style={dateStatusStyle}>
          {shiftMoment.format("DD")}
        </Text>
      </View>
    );
  };

  stationBadge = (station: IStation) => {
    return (
      <Badge
        badgeStyle={{ backgroundColor: station.color }}
        value={station.name}
      />
    );
  };

  renderShifts = ({ item }) => {
    return (
      <View style={styles.listItem}>
        {this.renderdate(item)}

        <View style={styles.shiftsWrapper}>
          {item.shifts.length < 1 && (
            <Card>
              <ListItem
                key={item.id}
                title={"Inga pass denna dag"}
                leftElement={this.renderOccupiedSettingsIcon(item.occupiedStatus)}
                titleStyle={{ color: colors.grey, fontStyle: "italic" }}
              />
            </Card>
          )}
          {item.shifts.map((shift: IWorkingShift) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                key={shift.id}
                onPress={this.goToShiftDetailsScreen(shift)}
              >
                <Card>
                  <ListItem
                    title={shift.time}
                    leftElement={this.renderOccupiedSettingsIcon(
                      item.occupiedStatus
                    )}
                    rightIcon={shift.comment && this.renderCommentIcon()}
                    rightElement={this.stationBadge(shift.station)}
                    chevron
                  />
                </Card>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  keyExtractor = (_item: IScheduleDateValues, index: number) =>
    index.toString();

  render() {
    return (
      <View style={styles.screen}>
        <Header
          containerStyle={styles.headerShadow}
          centerComponent={this.renderWeekToggler()}
          leftComponent={this.renderToggleCalendarComponent()}
        />
        <Modal
          isVisible={this.state.modalIsVisible}
          onBackdropPress={this.toggleModal}
        >
          <Calendar
            current={new Date("2019-08-16")}
            markedDates={{
              "2019-08-11": { selected: true, marked: true, startingDay: true },
              "2019-08-12": { selected: true, marked: true },
              "2019-08-13": { selected: true },
              "2019-08-14": { selected: true, marked: true },
              "2019-08-15": { selected: true, marked: true },
              "2019-08-16": { selected: true, marked: true },
              "2019-08-17": { selected: true, endingDay: true }
            }}
          />
        </Modal>

        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.listWrapper}
          keyExtractor={this.keyExtractor}
          data={workingShiftsMockData}
          renderItem={this.renderShifts}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.wildSand,
    flex: 1
  },
  listWrapper: {
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
  headerShadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 6
    },
    shadowRadius: 4,
    shadowOpacity: 0.15
  }
});
