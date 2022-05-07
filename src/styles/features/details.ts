import { ViewStyle, StyleSheet } from 'react-native';

import { StylesModels } from '~shared/models';

type Details =
  | {
      container: ViewStyle;
    }
  | StylesModels.AnyModel;

export const DETAILS: Details = StyleSheet.create({
  container: {
    flex: 1,
  },
});
