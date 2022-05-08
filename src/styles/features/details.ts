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
      extra: ViewStyle;
      rating: ViewStyle;
      aired: TextStyleExtended;
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
    flex: 0.76,
  },
  gradient: {
    width, // Full screen dimensions
    height: Platform.OS === 'android' ? 45 : 60,
  },
});

export const INFO: Info = StyleSheet.create({
  container: {
    flex: 0.24,
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
    marginBottom: 12,
  },
  extra: {
    flexDirection: UTILS.FLEX_ROW,
    justifyContent: UTILS.FLEX_BETWEEN,
  },
  rating: {
    justifyContent: UTILS.CENTER,
    marginRight: 4,
  },
  status: {
    flexDirection: UTILS.FLEX_ROW,
  },
  label: {
    color: COLORS.OPAQUE,
    fontFamily: FONTS.POPPINS_SEMIBOLD_600,
    fontSize: 15,
    marginRight: 10,
  },
  aired: {
    color: COLORS.OPAQUE,
    fontFamily:
      Platform.OS === 'ios' ? FONTS.ROBOTO_MONO_IOS : FONTS.ROBOTO_MONO,
    fontSize: 15,
  },
  bottom: {
    marginBottom: 6,
  },
});
