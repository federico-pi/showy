import { ViewStyle } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

type Home =
  | {
      container: ViewStyle;
    }
  | EStyleSheet.AnyObject;

export const HOME: Home = EStyleSheet.create({
  container: {
    flex: 1,
  },
});
