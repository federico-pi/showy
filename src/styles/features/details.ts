import { ViewStyle, StyleSheet } from 'react-native';

import { StylesModels } from '~shared/models';
import { UTILS } from '~styles/defaults';

type Details =
  | {
      container: ViewStyle;
      content: ViewStyle;
    }
  | StylesModels.AnyModel;

export const DETAILS: Details = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    justifyContent: UTILS.CENTER,
    alignItems: UTILS.CENTER,
  },
});
