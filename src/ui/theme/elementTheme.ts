import { Theme } from "react-native-elements";
import { colors } from "./colors";
import { spacing, borderRadius } from "./spacing";
import { size, weight } from "./typography";

/**
 * Overrides the style of react-native-elements
 * Guidelines: http://casperui.caspeco.com
 * How to use: https://react-native-training.github.io/react-native-elements/docs/customization.html
 */

export const theme = {
  Button: {
    buttonStyle: {
      padding: spacing.tight,
      backgroundColor: colors.pictonBlue,
      borderRadius: borderRadius.extraRounded
    },
    titleStyle: {
      color: colors.white,
      fontSize: size.large,
      fontWeight: weight.bold
    }
  },
  Badge: {
    badgeStyle: {
      height: "auto",
      borderRadius: borderRadius.extraRounded,
      padding: spacing.extraTight
    },
    textStyle: {
      fontSize: size.small
    }
  },
  Card: {
    containerStyle: {
      padding: 0,
      margin: 0,
      width: "100%",
      borderColor: "transparent",
      borderRadius: borderRadius.rounded,
      marginVertical: spacing.extraTight,
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 2,
      shadowOpacity: 0.08
    },
    wrapperStyle: {
      padding: spacing.base,
      borderRadius: borderRadius.rounded,
      borderColor: "transparent",
    },
  },
  Divider: {
    style: {
      marginVertical: spacing.base
    }
  },
  Input: {
    labelStyle: {
      color: colors.grey,
      fontSize: size.large,
      marginTop: spacing.tight,
    },
    inputContainerStyle: {
      borderColor: colors.lowOpacityBlack
    }
  },
  ListItem: {
    containerStyle: {
      margin: 0,
      padding: 0
    }
  },
  Header: {
    backgroundColor: colors.ceruleanBlue,
    containerStyle: {
      height: "12%",
      zIndex: 1,
      borderBottomColor: "transparent",
    },
  },
  Text: {
    style: {
      color: colors.black,
      fontSize: size.regular,
      fontWeight: weight.regular
    },
    h1Style: {
      fontSize: size.extraLarge,
      fontWeight: weight.bold
    },
    h2Style: {
      fontSize: size.large
    },
    h3Style: {
      fontSize: size.regular,
      fontWeight: weight.bold
    }
  },
} as Theme;