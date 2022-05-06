import { TextStyle } from 'react-native';

export type TextStyleExtended = Omit<TextStyle, 'fontSize'> & {
  fontSize: number | string | undefined;
};

export enum COLORS {
  WHITE = '#fff',
  GRAY = '#848A94',
  OPAQUE = '#191D30',
  BLACK = '#000',
  PRIMARY = '#EF1B53',
}

export enum FONTS {
  POPPINS_THIN_100 = 'Poppins-Thin',
  POPPINS_EXTRALIGHT_200 = 'Poppins-ExtraLight',
  POPPINS_LIGHT_300 = 'Poppins-Light',
  POPPINS_REGULAR_400 = 'Poppins-Regular',
  POPPINS_MEDIUM_500 = 'Poppins-Medium',
  POPPINS_SEMIBOLD_600 = 'Poppins-SemiBold',
  POPPINS_BOLD_700 = 'Poppins-Bold',
  POPPINS_EXTRABOLD_800 = 'Poppins-ExtraBold',
  POPPINS_BLACK_900 = 'Poppins-Black',
  ROBOTO_MONO = 'RobotoMono',
  ROBOTO_MONO_IOS = 'Roboto Mono',
}

export enum UTILS {
  CAPITALIZE = 'capitalize',
  UPPERCASE = 'uppercase',
  LOWERCASE = 'lowercase',
  TRANSPARENT = 'transparent',
  ABSOLUTE = 'absolute',
  RELATIVE = 'relative',
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
  FLEX_START = 'flex-start',
  FLEX_END = 'flex-end',
  FLEX_BETWEEN = 'space-between',
  FLEX_AROUND = 'space-around',
  FLEX_BASELINE = 'baseline',
  FLEX_STRETCH = 'stretch',
  FLEX_WRAP = 'wrap',
  FLEX_NO_WRAP = 'nowrap',
  FLEX_ROW = 'row',
  FLEX_ROW_REVERSE = 'row-reverse',
  FLEX_COLUMN = 'column',
  FLEX_COLUMN_REVERSE = 'column-reverse',
}
