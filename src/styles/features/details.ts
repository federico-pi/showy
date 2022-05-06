import { ViewStyle } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

type Details =
  | {
      container: ViewStyle;
    }
  | EStyleSheet.AnyObject;

export const DETAILS: Details = EStyleSheet.create({
  container: {
    flex: 1,
  },
});
