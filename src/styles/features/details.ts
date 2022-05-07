import { ViewStyle, StyleSheet, Dimensions } from 'react-native';

import { StylesModels } from '~shared/models';
import { COLORS, FONTS, TextStyleExtended, UTILS } from '~styles/defaults';

const { width } = Dimensions.get('window');

type Details =
  | {
      container: ViewStyle;
      content: ViewStyle;
      chevronContainer: ViewStyle;
      image: ViewStyle;
      gradient: ViewStyle;
      info: ViewStyle;
      title: TextStyleExtended;
      summary: TextStyleExtended;
    }
  | StylesModels.AnyModel;

export const DETAILS: Details = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    backgroundColor: COLORS.WHITE,
  },
  chevronContainer: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    position: UTILS.ABSOLUTE,
    justifyContent: UTILS.CENTER,
    alignItems: UTILS.CENTER,
    backgroundColor: COLORS.WHITE,
    top: 54,
    left: 20,
    zIndex: 2,
  },
  image: {
    width, // Full screen dimensions
    justifyContent: UTILS.FLEX_END,
    flex: 0.8,
  },
  gradient: {
    width, // Full screen dimensions
    height: 70,
  },
  info: {
    padding: 16,
    flex: 0.2,
  },
  title: {
    fontFamily: FONTS.POPPINS_BOLD_700,
    fontSize: 24,
    color: COLORS.OPAQUE,
  },
  summary: {
    fontFamily: FONTS.POPPINS_REGULAR_400,
    fontSize: 16,
    color: COLORS.OPAQUE,
  },
});
