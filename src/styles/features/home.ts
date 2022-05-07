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
    fontFamily: FONTS.POPPINS_SEMIBOLD_600,
    fontSize: 16,
    color: COLORS.OPAQUE,
  },
  iconContainer: {
    marginLeft: 12,
    padding: 8,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 20, // 'half of icon size + padding'
    justifyContent: UTILS.CENTER,
    alignItems: UTILS.CENTER,
  },
});
