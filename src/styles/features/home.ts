import { Dimensions, ViewStyle, StyleSheet } from 'react-native';

import { StylesModels } from '~shared/models';

import { COLORS, FONTS, TextStyleExtended, UTILS } from '~styles/defaults';

const { width } = Dimensions.get('window');

type Home =
  | {
      container: ViewStyle;
      content: ViewStyle;
      searchWrapper: ViewStyle;
      input: TextStyleExtended;
      iconContainer: ViewStyle;
    }
  | StylesModels.AnyModel;

export const HOME: Home = StyleSheet.create({
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
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    width: width - 48,
    justifyContent: UTILS.FLEX_BETWEEN,
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
