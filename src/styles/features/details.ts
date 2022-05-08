import { ViewStyle, StyleSheet, Dimensions, Platform } from 'react-native';

import { SharedModels } from '~shared/models';
import { COLORS, FONTS, TextStyleExtended, UTILS } from '~styles/defaults';

const { width } = Dimensions.get('window');

type Details =
  | {
      container: ViewStyle;
      content: ViewStyle;
      chevronContainer: ViewStyle;
      image: ViewStyle;
      gradient: ViewStyle;
    }
  | SharedModels.AnyObject;

type Info =
  | {
      container: ViewStyle;
      content: ViewStyle;
      title: TextStyleExtended;
      summary: TextStyleExtended;
      rating: ViewStyle;
      bottom: ViewStyle;
    }
  | SharedModels.AnyObject;

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
    flex: 0.78,
  },
  gradient: {
    width, // Full screen dimensions
    height: Platform.OS === 'android' ? 45 : 60,
  },
});

export const INFO: Info = StyleSheet.create({
  container: {
    flex: 0.22,
  },
  content: {
    padding: 16,
    paddingTop: 8,
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
    marginTop: 4,
  },
  rating: {
    marginTop: 10,
  },
  bottom: {
    marginBottom: 4,
  },
});
