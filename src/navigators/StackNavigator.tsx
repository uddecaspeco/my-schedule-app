import { createStackNavigator } from 'react-navigation';
import { ScheduleScreen, OccupiedSettingsScreen, ShiftDetailsScreen } from '../screens';
import { colors } from "../ui/theme";

export const StackNavigator = createStackNavigator(
  {
    SCHEDULE_SCREEN: {
      screen: ScheduleScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    OCCUPIED_SETTINGS_SCREEN: {
      screen: OccupiedSettingsScreen,
      navigationOptions: () => ({
        headerBackTitle: null,
        headerTintColor: colors.ceruleanBlue
      })
    },
    SHIFT_DETAILS_SCREEN: {
      screen: ShiftDetailsScreen,
      navigationOptions: () => ({
        headerBackTitle: null,
        headerTintColor: colors.ceruleanBlue
      })
    }
  },
  {
    initialRouteName: 'SCHEDULE_SCREEN'
  }
);