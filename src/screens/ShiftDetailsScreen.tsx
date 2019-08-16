import React from "react";
import { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

import { IWorkingShift } from "typings/workingShift";
import { NavigationInjectedProps, NavigationScreenProp, NavigationState } from "react-navigation";

import { colors } from "../ui/theme";

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