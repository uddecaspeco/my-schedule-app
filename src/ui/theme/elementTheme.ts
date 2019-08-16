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
  Text: {
    style: {
      fontSize: size.regular,
      fontWeight: weight.regular
    },
    h1Style: {
      fontSize: size.extraLarge,
    },
    h2Style: {
      fontSize: size.large
    },
    h3Style: {
      fontSize: size.regular,
      fontWeight: "600",
    }
  }
} as Theme;