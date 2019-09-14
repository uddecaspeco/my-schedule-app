import React from 'react';
import { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, CheckBox, Card } from 'react-native-elements';
import { NavigationScreenProps } from 'react-navigation';
import { colors, spacing } from '../ui/theme';

import { Calendar } from '../ui/custom-components/Calendar';

import { mockDates } from '../mockdata/dates';

type IOccupiedSettingsScreenProps = NavigationScreenProps;

export class OccupiedSettingsScreen extends Component<
  IOccupiedSettingsScreenProps
> {
  constructor(props: IOccupiedSettingsScreenProps) {
    super(props);
    this.state = {};
  }

  todayDateString = () => {
    const date = new Date();
    const options = {
      weekday: 'short',
      month: 'long',
      day: 'numeric'
    };
    return new Intl.DateTimeFormat('sv-SE', options).format(date);
  };

  render() {
    return (
      <ScrollView style={styles.screen}>
        <Calendar markedDates={mockDates} markingType={'period'} />
        <View style={styles.container}>
          <Text h1 style={{ marginBottom: spacing.base }}>
            {this.todayDateString()}
          </Text>
          <Card>
            <CheckBox
              title="Tillgänglighet ej satt"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked
            />
            <CheckBox
              title="Tillgänglig hela dagen"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={false}
            />
            <CheckBox
              title="Otillgänglig hela dagen"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={false}
            />
            <CheckBox
              title="Tillgäng mellan (...)"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={false}
            />
            <CheckBox
              title="Otillgäng mellan (...)"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={false}
            />
          </Card>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.wildSand
  },
  container: {
    margin: spacing.loose
  }
});
