import React, { ReactElement } from 'react';
import { View } from 'react-native';

import { DetailsFeatureStyles } from '~styles/features';

const { DETAILS: styles } = DetailsFeatureStyles;

/**
 * The details screen component
 */
function Details(): ReactElement {
  return <View style={styles.container} />;
}

export { Details };
