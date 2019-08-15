import React from 'react';
import { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { ThemeProvider } from 'react-native-elements';
import { AppNavigator } from './src/navigators/AppNavigator';
import { theme } from './src/ui/theme/elementTheme';

const RootNavigator = createAppContainer(AppNavigator);

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <RootNavigator />
      </ThemeProvider>
    );
  }
}
