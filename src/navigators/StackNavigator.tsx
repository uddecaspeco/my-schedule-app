import { createStackNavigator } from 'react-navigation';
import { ScheduleScreen, OccupiedSettings } from '../screens';
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
        headerTintColor: colors.seagullBlue
      })
    }
  },
  {
    initialRouteName: 'SCHEDULE_SCREEN'
  }
);