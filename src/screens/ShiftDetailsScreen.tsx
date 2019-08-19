import React from "react";
import Moment from "moment";

import "moment/locale/sv";

import { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Header, Icon, Card } from "react-native-elements";
import { IWorkingShift } from "typings/workingShift";
import {
  NavigationInjectedProps,
  NavigationScreenProp,
  NavigationState
} from "react-navigation";
import { colors, spacing } from "../ui/theme";

Moment.locale("sv");

interface IShiftDetailsScreenState extends NavigationState {}
interface IShiftDetailsScreenProps {
  shift: IWorkingShift;
  navigation: NavigationScreenProp<IShiftDetailsScreenState>;
}

type Props = IShiftDetailsScreenProps & NavigationInjectedProps;

export class ShiftDetailsScreen extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  renderShiftDetails = (shift: IWorkingShift) => {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Icon
            type={"font-awesome"}
            name={"map-marker"}
            reverse
            color={shift.station.color}
            containerStyle={{ marginRight: spacing.tight }}
          />
          <Text h2>{shift.station.name}</Text>
        </View>
        <View style={styles.row}>
          <Icon
            type={"font-awesome"}
            name={"calendar-o"}
            reverse
            color={shift.station.color}
            containerStyle={{ marginRight: spacing.tight }}
          />
          <Text h2>{Moment(shift.date).format("dddd D MMMM")}</Text>
        </View>
        <View style={styles.row}>
          <Icon
            type={"font-awesome"}
            name={"clock-o"}
            reverse
            color={shift.station.color}
            containerStyle={{ marginRight: spacing.tight }}
          />
          <Text h2>{shift.time}</Text>
        </View>
        <View style={styles.commentWrapper}>
          <Text h2 style={{ fontWeight: "bold" }}>
            Passkommentar:
          </Text>
          <Card containerStyle={styles.card}>
            {!shift.comment ? (
              <Text style={{ fontStyle: "italic", color: colors.grey }}>
                Ingen kommentar.
              </Text>
            ) : (
              <Text>{shift.comment}</Text>
            )}
          </Card>
        </View>
      </View>
    );
  };

  render() {
    const shift = this.props.navigation.getParam("shift");
    return (
      <View style={styles.screen}>
        <Header
          backgroundColor={shift.station.color}
          centerComponent={
            <Text h1 style={{ color: colors.white }}>
              Passdetaljer
            </Text>
          }
        />
        {this.renderShiftDetails(shift)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.wildSand
  },
  card: {
    shadowOpacity: 0,
    marginVertical: spacing.base
  },
  container: {
    padding: spacing.loose
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  commentWrapper: {
    marginTop: spacing.loose
  }
});
