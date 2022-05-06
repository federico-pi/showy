import { ViewStyle } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import { COLORS, FONTS, TextStyleExtended, UTILS } from '~styles/defaults';

type Main =
  | {
      container: ViewStyle;
      description: TextStyleExtended;
    }
  | EStyleSheet.AnyObject;

export const MAIN: Main = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    alignItems: UTILS.CENTER,
    justifyContent: UTILS.CENTER,
  },
  description: {
    fontFamily: FONTS.POPPINS_SEMIBOLD_600,
    color: COLORS.PRIMARY,
    textAlign: UTILS.CENTER,
    fontSize: 'rem',
    marginBottom: '1.5rem',
    width: '80%',
  },
});
