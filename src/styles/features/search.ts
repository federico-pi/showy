import { Dimensions, ViewStyle, StyleSheet } from 'react-native';

import { SharedModels } from '~shared/models';

import { COLORS, FONTS, TextStyleExtended, UTILS } from '~styles/defaults';

const { width } = Dimensions.get('window');

type Search =
  | {
      container: ViewStyle;
      content: ViewStyle;
      searchWrapper: ViewStyle;
      input: TextStyleExtended;
      iconContainer: ViewStyle;
    }
  | SharedModels.AnyObject;

type List =
  | {
      container: ViewStyle;
      grow: ViewStyle;
      spacer: ViewStyle;
    }
  | SharedModels.AnyObject;

type Card =
  | {
      container: ViewStyle;
      image: ViewStyle;
      title: TextStyleExtended;
      lastItem: ViewStyle;
    }
  | SharedModels.AnyObject;

export const SEARCH: Search = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    backgroundColor: COLORS.WHITE,
    justifyContent: UTILS.CENTER,
    alignItems: UTILS.CENTER,
  },
  searchWrapper: {
    flexDirection: UTILS.FLEX_ROW,
    backgroundColor: COLORS.SILVER,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    width: width - 48,
    justifyContent: UTILS.FLEX_BETWEEN,
    marginBottom: 32,
  },
  input: {
    flex: 1,
    fontFamily: FONTS.POPPINS_SEMIBOLD_600,
    fontSize: 16,
    color: COLORS.OPAQUE,
  },
  iconContainer: {
    height: 32,
    width: 32,
    borderRadius: 32 / 2, // 'half of icon size + padding'
    padding: 10,
    marginLeft: 12,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: UTILS.CENTER,
    alignItems: UTILS.CENTER,
    alignSelf: UTILS.CENTER,
    zIndex: 2,
  },
});

export const LIST: List = StyleSheet.create({
  container: {
    height: 320,
    justifyContent: UTILS.FLEX_BETWEEN,
  },
  grow: {
    flexGrow: 1,
  },
  spacer: {
    width: 2,
  },
});

export const CARD: Card = StyleSheet.create({
  container: {
    height: 220,
    width: 120,
    marginLeft: 28,
  },
  image: {
    flex: 1,
    borderRadius: 12,
  },
  title: {
    fontFamily: FONTS.POPPINS_REGULAR_400,
    fontSize: 16,
    color: COLORS.OPAQUE,
    marginTop: 14,
  },
  lastItem: {
    marginRight: 28,
  },
});
