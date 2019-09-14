import React from "react";
import { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Card, Input } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import { colors, spacing } from "../ui/theme";

type IProfileSettingsScreenProps = NavigationScreenProps;

export class ProfileSettingsScreen extends Component<IProfileSettingsScreenProps> {
  constructor(props: IProfileSettingsScreenProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.container}>
          <Avatar
            containerStyle={styles.avatar}
            rounded
            size={"xlarge"}
            source={{
              uri: "https://pbs.twimg.com/media/BSUcpZCCQAA_4ai.jpg"
            }}
          />
          <Card>
            <Input label={"Personnummer"} value={"930821-1169"} />
            <Input label={"E-postadress"} value={"emma.uddesson@caspeco.se"} />
            <Input label={"Mobilelefon"} value={"076 139 68 72"} />
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    marginVertical: spacing.loose
  },
  container: {
    alignItems: "center",
    padding: spacing.base
  },
  screen: {
    flex: 1,
    backgroundColor: colors.wildSand
  },
});
