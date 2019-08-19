import React from "react";

import { Component } from "react";
import {
  Calendar as RNCalendar,
  LocaleConfig,
  CalendarBaseProps
} from "react-native-calendars";

LocaleConfig.locales["sv"] = {
  monthNames: [
    "Januari",
    "Februari",
    "Mars",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "Augusti",
    "September",
    "Oktober",
    "November",
    "December"
  ],
  monthNamesShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Maj",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
  ],
  dayNames: [
    "Måndag",
    "Tisdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lördag",
    "Söndag"
  ],
  dayNamesShort: ["Mån.", "Tid", "Ons", "Tors", "Fre", "Lör", "Sön"],
};

LocaleConfig.defaultLocale = "sv";

interface ICalendarState {}

export class Calendar extends Component<CalendarBaseProps, ICalendarState> {
  constructor(props: CalendarBaseProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <RNCalendar
        {...this.props} 
      />
    );
  }
}
