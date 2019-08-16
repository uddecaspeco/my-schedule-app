import { createMaterialTopTabNavigator } from "react-navigation";
import { OccupiedSettingsScreen, SettingsScreen } from "../screens";
import { colors, size, weight, spacing } from "../ui/theme";

export const TabNavigator = createMaterialTopTabNavigator(
  {
    OCCUPIED_SETTINGS_SCREEN: {
      screen: OccupiedSettingsScreen,

      navigationOptions: {
        title: "Status"
      }
    },
    SETTINGS_SCREEN: {
      screen: SettingsScreen,

      navigationOptions: {
        title: "Profil"
      }
    }
  },
  {
    initialRouteName: "OCCUPIED_SETTINGS_SCREEN",
    tabBarOptions: {
      style: {
        backgroundColor: colors.ceruleanBlue,
        shadowColor: colors.black,
        shadowOffset: {
          width: 2,
          height: 6
        },
        shadowRadius: 4,
        shadowOpacity: 0.15,
      },
      tabStyle: {
        padding: spacing.loose,
      },
      labelStyle: {
        marginTop: spacing.loose,
        fontSize: size.regular,
        fontWeight: "bold"
      },
      activeTintColor: colors.white,
      inactiveTintColor: colors.astronautBlue,
      indicatorStyle: {
        borderWidth: 4,
        borderColor: colors.white,
      }
    }
  }
);
