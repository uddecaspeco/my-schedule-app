import React from "react";

import { createBottomTabNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

import { colors } from "../ui/theme/colors";
import { SettingsScreen } from "../screens";
import { StackNavigator } from "./StackNavigator";

const SettingsTabBarIcon = (props) => {
  return <Icon type={"font-awesome"} size={28} name={"cog"} color={props.tintColor} />
}

const ScheduleTabBarIcon = (props) => {
  return <Icon type={"font-awesome"} size={28} name={"calendar"} color={props.tintColor} />
}

export const AppNavigator = createBottomTabNavigator(
  {
    SCHEDULE_SCREEN: {
      screen: StackNavigator,
      navigationOptions: {
        tabBarAccessibilityLabel: "Schedule",
        tabBarIcon: props =>
          <ScheduleTabBarIcon
            {...props}
          />,
      }
    },
    SETTINGS_SCREEN: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarAccessibilityLabel: "Settings",
        tabBarIcon: props =>
          <SettingsTabBarIcon
            {...props}
          />,
      }
    }
  },
  {
    initialRouteName: "SCHEDULE_SCREEN",
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      inactiveTintColor: colors.seagullBlue,
      activeTintColor: colors.ceruleanBlue,
      style: {
        backgroundColor: colors.white,
        display: "flex",
        borderTopColor: "transparent"
      }
    }
  }
);