import { TextStyle } from 'react-native';

export type TextStyleExtended = Omit<TextStyle, 'fontSize'> & {
  fontSize: number | string | undefined;
};

export enum COLORS {
  WHITE = '#fff',
  SILVER = '#F5F5F5',
  GRAY = '#848A94',
  OPAQUE = '#191D30',
  BLACK = '#000',
  PRIMARY = '#EF1B53',
}

export enum SIZES {
  BUILD_BASE = 16,
  REM_8 = '0.5rem',
  REM_9 = '0.5625',
  REM_10 = '0.625rem',
  REM_11 = '0.6875rem',
  REM_12 = '0.75rem',
  REM_13 = '0.8125rem',
  REM_14 = '0.875rem',
  REM_15 = '0.9375rem',
  REM_16 = 'rem',
  REM_17 = '1.0625rem',
  REM_18 = '1.125rem',
  REM_19 = '1.1875rem',
  REM_20 = '1.25rem',
  REM_21 = '1.3125rem',
  REM_22 = '1.375rem',
  REM_23 = '1.4375rem',
  REM_24 = '1.5rem',
  REM_25 = '1.5625rem',
  REM_26 = '1.625rem',
  REM_27 = '1.6875rem',
  REM_28 = '1.75rem',
  REM_29 = '1.8125rem',
  REM_30 = '1.875rem',
  REM_31 = '1.9375rem',
  REM_32 = '2rem',
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
