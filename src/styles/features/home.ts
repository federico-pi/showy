import { Dimensions, ViewStyle } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import {
  COLORS,
  FONTS,
  SIZES,
  TextStyleExtended,
  UTILS,
} from '~styles/defaults';

const { width } = Dimensions.get('window');

type Home =
  | {
      container: ViewStyle;
      content: ViewStyle;
      searchWrapper: ViewStyle;
      input: TextStyleExtended;
      iconContainer: ViewStyle;
    }
  | EStyleSheet.AnyObject;

export const HOME: Home = EStyleSheet.create({
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
    paddingVertical: SIZES.REM_8,
    paddingHorizontal: SIZES.REM_16,
    borderRadius: SIZES.REM_12,
    width: width - 48,
    justifyContent: UTILS.FLEX_BETWEEN,
  },
  input: {
    fontFamily: FONTS.POPPINS_SEMIBOLD_600,
    fontSize: SIZES.REM_16,
    color: COLORS.OPAQUE,
  },
  iconContainer: {
    marginLeft: SIZES.REM_12,
    padding: SIZES.REM_8,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: '12 + 32',
    justifyContent: UTILS.CENTER,
    alignItems: UTILS.CENTER,
  },
});
