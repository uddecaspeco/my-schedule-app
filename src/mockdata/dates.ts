// Calendar colors for dates

const green = "#a7e0a3"; // Available
const orange = "#fcce4e"; // Available part of day
const red = "#ff7a7a"; // Not available

export const mockDates = {
  "2019-09-02": { startingDay: true, endingDay: true, color: orange },
  "2019-09-09": { startingDay: true, color: green },
  "2019-09-10": { color: green },
  "2019-09-11": { color: green },
  "2019-09-12": { endingDay: true, color: green },
  "2019-09-20": { startingDay: true, endingDay: true, color: red },
  "2019-09-23": {
    color: green,
    startingDay: true,
    endingDay: true,
    marked: true,
  },
  "2019-09-24": {
    color: green,
    startingDay: true,
    endingDay: true
  },
  "2019-09-25": {
    color: red,
    startingDay: true,
    endingDay: true
  },
  "2019-09-27": {
    color: orange,
    startingDay: true,
    endingDay: true,
  },
  "2019-10-09": {
    startingDay: true,
    color: green
  },
  "2019-10-10": { color: green },
  "2019-10-11": { color: green },
  "2019-10-12": { endingDay: true, color: green },
  "2019-10-20": { startingDay: true, endingDay: true, color: red },
  "2019-10-23": {
    color: green,
    startingDay: true,
    endingDay: true
  },
  "2019-10-24": {
    color: green,
    startingDay: true,
    endingDay: true
  },
  "2019-10-25": {
    color: red,
    startingDay: true,
    endingDay: true
  },
  "2019-10-27": {
    color: orange,
    startingDay: true,
    endingDay: true
  },
};